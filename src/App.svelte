<script type="ts">
	import { EasyrouteProvider, RouterOutlet, RouterLink } from 'svelte-easyroute'
	import router from "./router/router";

	import './tailwind.css'
	
</script>

<EasyrouteProvider {router}>
	<RouterOutlet />
</EasyrouteProvider>