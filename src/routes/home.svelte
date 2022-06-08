<script lang="ts">
    import EmployeeInfo from '$lib/components/EmployeeInfo.svelte'

</script>

    <div class="flex justify-between items-center">
        <h1 class="text-3xl text-center pl-5 select-none cursor-default">▶️ PlayFlow 🌊</h1>
        <div class="p-5">
            <EmployeeInfo employee={{name: 'Example User', ID: 123456, pin: 12345}} />
        </div>
    </div>
    
    <div class="bg-gray-300 m-10 p-5">
        <h1 class="text-2xl">Daily Card Tap</h1>
        <button class="bg-gray-500 p-10 text-white text-xl">Start A.M. Tap</button>
        <button class="bg-gray-500 p-10 text-white text-xl">Today's Issues</button>
    </div>
    <div class="bg-gray-300 m-10 p-5">
        <h1 class="text-2xl">Management</h1>
        <button class="bg-gray-500 p-10 text-white text-xl">Manage Games</button>
        <button class="bg-gray-500 p-10 text-white text-xl">Manage Users</button>
    </div>