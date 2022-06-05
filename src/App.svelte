<script type="ts">
	import { EasyrouteProvider, RouterOutlet, RouterLink } from 'svelte-easyroute'
	import router from "./router/router";

	import style from './tailwind.css'
	console.log(style)

	export let name: string;
</script>

<EasyrouteProvider {router}>
	<main>
		<h1 class="text-3xl text-sky-500">Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<p>This is demo project for <a href="https://github.com/lyohaplotinka/svelte-easyroute">Svelte Easyroute</a>
			SSR. See the source code of this page :)</p>
		<RouterLink to="/">Page one</RouterLink>
		<RouterLink to="/page-two">Page two</RouterLink>
		<RouterOutlet />
	</main>
</EasyrouteProvider>