<script lang="ts">
    import { employees } from '$lib/stores/seedData'
    import { session } from '$app/stores'
    import EditableEmployee from '$lib/components/EditableEmployee.svelte'
    import NewEmployee from '$lib/components/NewEmployee.svelte'
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'

    function addNew(e: CustomEvent) {
        employees.update(employees => [e.detail, ...employees])
    }
</script>
<svelte:head>
    <title>Manage Users</title>
</svelte:head>

<div class="flex justify-between items-center">
    <h1 class="text-3xl text-center pl-5 select-none cursor-default">Managing Users</h1>
    <div class="p-5">
        <EmployeeInfo employee={$session.user} />
    </div>
</div>

<div class="grid-cols-3 auto-rows-auto items-center justify-center">
    <NewEmployee on:created={addNew} />
    {#each $employees as employee (employee.ID)}
        <EditableEmployee {employee} />
    {/each}
</div>