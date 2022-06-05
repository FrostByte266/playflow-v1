<script lang="ts">
    import type { IEmployee } from '../types/employee'
    export let employee: IEmployee
</script>

<div class="w-full h-full flex flex-col">
    <div class="rounded-full bg-gray-500 p-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
    </div>
    <h1 class="text-xl">{String(employee.ID).padStart(9,'0')}</h1>
    <h1 class="text-lg">{employee.name}</h1>
</div>