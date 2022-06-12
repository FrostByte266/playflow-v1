<script lang="ts">
    import GameIssue from '$lib/components/GameIssue.svelte'
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'
    import * as IssueEnum from '$lib/types/enums/issue'
    import { employees, gameIssues } from '$lib/stores/seedData'

    import type { IGameIssue } from '$lib/types/game'


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
        <EmployeeInfo employee={$employees[0]} />
    </div>
</div>


<GameIssue secondaryBg={true} issue={$gameIssues[0]} />
<GameIssue secondaryBg={false} issue={$gameIssues[1]} />