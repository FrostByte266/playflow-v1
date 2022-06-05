<script context="module" lang="ts">
	import { EasyrouteProvider, RouterOutlet, RouterLink } from 'svelte-easyroute'
	import registerRouterSSR from 'svelte-easyroute/ssr/registerRouterSSR'
	import router from "./router/router";

	import './tailwind.css'
	registerRouterSSR(router)
</script>

<script lang="ts">
	export let name: string;
</script>

<EasyrouteProvider {router}>
	<main>
		<h1 class="text-3xl text-green-900">Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<p>This is demo project for Svelte Easyroute SSR. See the source code of this page :)</p>
		<RouterLink to="/">Page one</RouterLink>
		<RouterLink to="/page-two">Page two</RouterLink>
		<RouterOutlet />
	</main>
</EasyrouteProvider>
