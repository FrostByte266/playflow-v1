<script lang="ts">
    import EmployeeInfo from './EmployeeInfo.svelte'

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
    let selectedUser: IEmployee;
</script>
<div class="bg-gray-300 h-screen ">
    <div class="h-full flex flex-col items-center justify-center">
        <div class="p-5 flex flex-col align-center items-center bg-gray-400 rounded-lg">
            <h1 class="text-3xl">Welcome #{storeNumber}. Please select a user</h1>
            <div class="w-full p-5 gap-5 flex justify-around items-center">
                {#each employees as employee (employee.ID)}
                    <EmployeeInfo {employee} />
                {/each}
            </div>
        </div>
    </div>
</div>