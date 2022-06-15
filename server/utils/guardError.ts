import type { Response } from "express";
import type { CallbackError, HydratedDocument } from "mongoose";
import Codes from 'http-status-codes'

type MaybeArray<T> = T[] | T
type DocumentOrQueryResult<T> = MaybeArray<HydratedDocument<T>>
type MongoCallback<T> = (err: CallbackError, doc: DocumentOrQueryResult<T>) => void
type SuccessCallback<T> = (doc: DocumentOrQueryResult<T>) => void
type ErrorCallback = (res: Response, err: CallbackError) => void

interface ErrorHandlerMap {
    [eName: string]: ErrorCallback
}

/**
 * Generates a callback function to be used with mongoose query operations. 
 * If there is an error, it will execute a callback function depending on the error type,
 * or the default of sending the error as JSON with HTTP Status 500: Internal Server Error
 * if no callbacks are provided for that error type. 
 * Otherwise, it will execute the `onSuccess` callback function, passing the hydrated document
 * as its sole argument
 * @param  { Response } res The express route's response object
 * @param { ErrorHandlerMap } errHandlers An object mapping eror names to callback functions,
 * receives `res` and the error object as its arguments. If not provided, the default behavior of
 * sending the error as JSON with HTTP Code 500 is used
 * @param  { SuccessCallback<T> } onSuccess A callback that is excecuted if there are no errors
 * @returns { MongoCallback<T> } Callback function that can be passed to mongoose functions
 */
export default function guardError<T>(res: Response, errHandlers: ErrorHandlerMap, onSuccess: SuccessCallback<T>): MongoCallback<T> {
    return (err: CallbackError, doc: DocumentOrQueryResult<T>) => {
        if(err) {
            if (err.name in errHandlers) {
                errHandlers[err.name](res, err)
            } else {
                res.status(Codes.INTERNAL_SERVER_ERROR).json(err)
            }
        } else {
            onSuccess(doc)
        }
    }
}

