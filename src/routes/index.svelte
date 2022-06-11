<script lang="ts">
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'

    import { employees } from '$lib/stores/seedData'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="flex justify-between items-center">
    <h1 class="text-3xl text-center pl-5 select-none cursor-default">▶️ PlayFlow 🌊</h1>
    <div class="p-5">
        <EmployeeInfo employee={$employees[0]} />
    </div>
</div>

<div class="bg-gray-300 m-10 p-5">
    <h1 class="text-2xl">Daily Card Tap</h1>
    <a class="bg-gray-500 p-10 text-white text-xl inline-block" href="/gametap">Start A.M. Tap</a>
    <a class="bg-gray-500 p-10 text-white text-xl inline-block" href="/issues">Today's Issues</a>
</div>
<div class="bg-gray-300 m-10 p-5">
    <h1 class="text-2xl">Management</h1>
    <a class="bg-gray-500 p-10 text-white text-xl inline-block" href="/manage/games">Manage Games</a>
    <a class="bg-gray-500 p-10 text-white text-xl inline-block" href="/manage/users">Manage Users</a>
</div>