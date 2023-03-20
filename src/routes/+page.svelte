<script>
	import { onMount } from 'svelte';
	import { savedVolume, isDubbed, provider } from '$lib/stores/media.js';

	export let data;
	$: trend = data.trend.results;

	let src = 'https://media-files.vidstack.io/hls/index.m3u8';
	let poster = 'https://media-files.vidstack.io/poster.png';
	let showPlayer = false;
	let player;

	let currentTime = 0;
	let duration = 0;
	let volume;
	let muted = false;

	// $:if(muted){
	// 	savedVolume.set(0)
	// }else{
	// 	$savedVolume = 80
	// }

	onMount(async () => {
		const { defineCustomElements } = await import('@vime/core');
		defineCustomElements();
		showPlayer = true;
		player.volume = $savedVolume;
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script
		defer
		type="module"
		src="https://cdn.jsdelivr.net/npm/@vime/core@^5/dist/vime/vime.esm.js"
	>
	</script>
</svelte:head>

<!-- <div class="video">
	{#if showPlayer}
		<vm-player
			bind:this={player}
			on:vmMutedChange={(event) => console.log(event.detail)}
			on:vmVolumeChange={(event) => console.log(event.detail)}
			on:vmDurationChange={(event) => (duration = Math.trunc(event.detail))}
			on:vmCurrentTimeChange={(event) => (currentTime = Math.trunc(event.detail))}
		>
			<vm-hls version="latest" {poster}>
				<source data-src={src} type="application/x-mpegURL" />
			</vm-hls>
			<vm-ui>
				<vm-default-controls />
			</vm-ui>
		</vm-player>
	{/if}
</div> -->

<!-- <h3>{currentTime}</h3>
<h3>{duration}</h3>
<h3>{$savedVolume}</h3>

<label for="slider">Playbaack Slider</label>
<input
	id="slider"
	type="range"
	max={duration}
	step="1"
	min="0"
	bind:value={currentTime}
	on:input={(event) => {
		player.currentTime = event.target.value;
	}}
/>

<label for="check">Mute/Unmute</label>
<input
	on:input={(event) => {
		player.muted = event.target.checked;
		if (muted) {
			$savedVolume = 0;
		} else {
			$savedVolume.set(volume);
		}
	}}
	type="checkbox"
	name=""
	bind:checked={muted}
	id="check"
/>

<label for="volume">Volume</label>
<input
	id="volume"
	type="range"
	max="100"
	step="2"
	min="0"
	bind:value={$savedVolume}
	on:input={(event) => {
		player.volume = event.target.value;
		if (muted) {
			player.muted = false;
		}
	}}
/>

<button on:click={() => player.play()}>Play</button>
<button on:click={() => player.pause()}>Pause</button>

<label for="backward">Backward</label>
<button id="backward" on:click={() => (player.currentTime -= 5)}>-5</button>

<label for="forward">Forward</label>
<button id="forward" on:click={() => (player.currentTime += 5)}>+5</button> -->

{#each trend as anime}
	<a href="/{anime.id}?dub={$isDubbed}&provider={$provider}">{anime.id}</a>
{/each}

<style>
	.video {
		max-width: 500px;
	}
</style>
