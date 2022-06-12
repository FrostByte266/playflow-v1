<script lang="ts">
    import { employees } from '$lib/stores/seedData'
    import EditableEmployee from '$lib/components/EditableEmployee.svelte'
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'
</script>
<svelte:head>
    <title>Manage Users</title>
</svelte:head>

<div class="flex justify-between items-center">
    <h1 class="text-3xl text-center pl-5 select-none cursor-default">Managing Users</h1>
    <div class="p-5">
        <EmployeeInfo employee={$employees[0]} />
    </div>
</div>

<div class="grid-cols-3 auto-rows-auto items-center justify-center">
    {#each $employees as employee (employee.ID)}
        <EditableEmployee {employee} />
    {/each}
</div>