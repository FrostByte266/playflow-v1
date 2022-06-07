<script lang="ts">
    import EmployeeInfo from '../components/EmployeeInfo.svelte'
    import PinEntry from '../components/PinEntry.svelte'

    import { currentUser } from '../stores/loginStore'
    import router from '../router/router'

    import type { IEmployee } from '../types/employee'
    const storeNumber = 795
    const employees: Array<IEmployee> = [
        {
            ID: 445324,
            name: "John Doe",
            pin: 12345
        },
        {
            ID: 424561,
            name: "Bob Smith",
            pin: 54321
        },
        {
            ID: 347653,
            name: "Sarah Lynn",
            pin: 11111
        }
    ]

    function reset() {
        selectedUser = undefined
        enteredPin = undefined
    }

    function logIn() {
        if(selectedUser.pin === Number(enteredPin)) {
            currentUser.set(selectedUser)
            router.push('/home')
        } else {
            console.log('Wrong password')
        }

    }

    let selectedUser: IEmployee;
    let enteredPin: string
    let pinView: string
</script>
<div class="bg-gray-300 h-screen ">
    <div class="h-full flex flex-col items-center justify-center">
        <div class="p-5 flex flex-col align-center items-center bg-gray-400 rounded-lg">
            {#if selectedUser}
                <h1 class="text-3xl">{selectedUser.name}, please enter your PIN</h1>
                <EmployeeInfo employee={selectedUser} />
                <PinEntry on:submit={logIn} bind:enteredPin bind:pinView />
                {#if enteredPin}
                    <h1>{pinView}</h1>
                {:else}
                    <h1 class="text-gray-300">Enter your pin</h1>
                {/if}
                <button on:click={reset}>Return to user select</button>
            {:else}
                <h1 class="text-3xl">Welcome #{storeNumber}. Please select a user</h1>
                <div class="w-full p-5 gap-5 flex justify-around items-center">
                    {#each employees as employee (employee.ID)}
                        <div class="transition-transform hover:scale-125">
                            <EmployeeInfo on:click={() => selectedUser=employee} {employee} />
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>