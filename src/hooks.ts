import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    // For now we're not doing anything, once the API is connected,
    // we will be checking user auth here
    return await resolve(event)
}