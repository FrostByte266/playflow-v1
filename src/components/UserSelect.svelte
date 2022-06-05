<script>
    import UserInfo from './UserInfo.svelte'
    const storeNumber = 795
    const users = [
        {
            employeeID: 445324,
            employeeName: "John Doe"
        },
        {
            employeeID: 424561,
            employeeName: "Bob Smith"
        },
        {
            employeeID: 347653,
            employeeName: "Sarah Lynn"
        }
    ]
</script>
<div class="bg-gray-300 h-screen ">
    <div class="h-full flex flex-col items-center justify-center">
        <div class="p-5 flex flex-col align-center items-center bg-gray-400 rounded-lg">
            <h1 class="text-3xl">Welcome #{storeNumber}. Please select a user</h1>
            <div class="w-full p-5 gap-5 flex justify-around items-center">
                {#each users as user (user.employeeID)}
                    <UserInfo {...user} />
                {/each}
            </div>
        </div>
    </div>
</div>