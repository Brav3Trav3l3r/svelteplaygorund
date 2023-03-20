<script>
	export let data;
	import { enhance } from '$app/forms';
	import { isDubbed, provider, currentEp } from '$lib/stores/media.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	$: info = data.info;
	$: console.log('dub', $isDubbed);
	$: console.log('provider', $provider);

	let url;

	//run this function when provider or isDub change

	// $: if($isDubbed || $provider){
	// 	listenStore()
	// }

	// const listenStore = async () => {
	// 	console.log('ran')
	// 	if ($currentEp != ' ') {
	// 		const newEp = await info.episodes.find((n) => n.number === $currentEp.number);
	// 		currentEp.set(newEp);
	// 	}
	// };

	let pageForm;

	$: if ($currentEp.id) {
		console.log('ran reactivity')
		getUrl($currentEp.id)
	}

	const getUrl = async(id) => {
		console.log('ran geturl')
		if (id != null) {
			const res = await fetch(
				`http://localhost:8080/https://api-consumet-rust.vercel.app/meta/anilist/watch/${id}?provider=${$provider}`
			);
			const data = await res.json();
			const sources = await data.sources;
			const obj = await sources.find(el => el.quality === 'default' || el.quality === 'auto' )
			url = obj.url
			console.log(url)
		}
	}
</script>

<form bind:this={pageForm} action="?/changeSrc" method="POST" use:enhance>
	<select
		name="dub"
		bind:value={$isDubbed}
		on:change={(event) => {
			pageForm.requestSubmit();
			isDubbed.set(event.target.value);
		}}
	>
		<option value="false">false</option>
		<option value="true">true</option>
	</select>
	<select
		name="provider"
		bind:value={$provider}
		on:change={(event) => {
			pageForm.requestSubmit();
			provider.set(event.target.value);
		}}
	>
		<option value="gogo">Gogo</option>
		<option value="zoro">Zoro</option>
	</select>
</form>

<h1>{info.id}</h1>
{#each info.episodes as eps}
	<h3
		on:keydown
		on:click={() => {
			currentEp.set(eps);
		}}
	>
		{eps.id}
	</h3>
{/each}
