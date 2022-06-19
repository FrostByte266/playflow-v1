<script lang="ts">
    import GameIssue from '$lib/components/GameIssue.svelte'
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'
    import { gameIssues } from '$lib/stores/seedData'

    import { session } from '$app/stores'

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
</script>

<svelte:head>
    <title>Review Issues</title>
</svelte:head>


<div class="flex justify-between items-center">
    <h1 class="text-3xl text-center pl-5 select-none cursor-default">Current issues as of {today}</h1>
    <div class="p-5">
        <EmployeeInfo employee={$session.user} />
    </div>
</div>

{#each $gameIssues as issue (issue.game.name)}
    <GameIssue {issue} />
{/each}