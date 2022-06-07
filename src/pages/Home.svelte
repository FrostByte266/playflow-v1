<script lang="ts">
    // import enforceLogin from '../utils/loginGuard'
    import router from '../router/router'
    import { currentUser } from '../stores/loginStore'
    import EmployeeInfo from '../components/EmployeeInfo.svelte'

    // enforceLogin($currentUser, router)
</script>

<div class="h-screen">
    <div class="flex justify-end items-center">
        <h1>▶️ PlayFlow 🌊</h1>
        <div class="p-5">
            <EmployeeInfo employee={{name: 'Bob', ID: 429072}} />
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
</div>