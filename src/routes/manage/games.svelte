<script lang="ts">
    import { employees, games } from '$lib/stores/seedData'
    import EditableGame from '$lib/components/EditableGame.svelte'
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'
</script>
<svelte:head>
    <title>Manage Games</title>
</svelte:head>

<div class="flex justify-between items-center">
    <h1 class="text-3xl text-center pl-5 select-none cursor-default">Managing Games</h1>
    <div class="p-5">
        <EmployeeInfo employee={$employees[0]} />
    </div>
</div>

<div class="grid-cols-3 auto-rows-auto items-center justify-center">
    {#each $games as game (game.name)}
        <EditableGame {game} />
    {/each}
</div>