<script lang="ts">
    import EmployeeInfo from '../components/EmployeeInfo.svelte'
    import PinEntry from '../components/PinEntry.svelte'

    import type { IEmployee } from '../types/employee'
    const storeNumber = 795
    const employees: Array<IEmployee> = [
        {
            ID: 445324,
            name: "John Doe"
        },
        {
            ID: 424561,
            name: "Bob Smith"
        },
        {
            ID: 347653,
            name: "Sarah Lynn"
        }
    ]

    function reset() {
        selectedUser = undefined
        enteredPin = undefined
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
                <PinEntry bind:enteredPin bind:pinView />
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