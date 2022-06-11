<script lang="ts">
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'

    import type { IGameIssue } from '$lib/types/game'

    export let issue: IGameIssue
    export let secondaryBg = false

    let resolvedBg: string;

    $: resolvedBg = `bg-gray-${secondaryBg ? '300' : '400'}`
</script>


<div class="{resolvedBg} my-2 p-5 flex justify-between" >
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-lg">{issue.game.name}</h1>
        <h1 class="text-lg">Reported on {issue.date.toLocaleDateString()}</h1>
        <h1 class="text">By: {issue.reportedBy.name} ({String(issue.reportedBy.ID).padStart(9, '0')})</h1>
    </div>
    <div class="flex flex-col justify-between items-center">
        <h1 class="text-lg">Issue Type: {issue.type}</h1>
        <h1 class="text-lg">Description:</h1>
        <textarea class="p-2" readonly>{issue.description}</textarea>
    </div>
    <div class="flex flex-col gap-2 justify-center items-center">
        <p class="w-full text bg-gray-500 p-2">Status: {issue.state}</p>
        <div class="w-full flex gap-3 text bg-gray-500 p-2">Actions:
            <a href="/issue/edit" title="Edit issue">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            </a>
            <a href="/issue/complete" title="Resolve Issue">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </a>
            <a href="/issue" title="Delete Issue">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
</div>