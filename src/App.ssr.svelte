<script context="module" lang="ts">
	import { EasyrouteProvider, RouterOutlet, RouterLink } from 'svelte-easyroute'
	import registerRouterSSR from 'svelte-easyroute/ssr/registerRouterSSR'
	import router from "./router/router";

	import './tailwind.css'
	registerRouterSSR(router)
</script>

<script lang="ts">
</script>

<div class="h-screen">
	<EasyrouteProvider {router}>
		<RouterOutlet />
	</EasyrouteProvider>
</div>
