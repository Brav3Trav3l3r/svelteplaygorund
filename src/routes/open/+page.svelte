<script>
	import OpenPlayerJS from 'openplayerjs';
	import { onMount } from 'svelte';

	let player;
	let proxy = 'https://cors.dekianime.site';
	let url =
		'https://c-an-ca3.betterstream.cc:2223/hls-playback/6184254bc46b181dcb88fb33448042128b6c6ff306ce0fe6ec1362a13d3ffcf8399f7519c5e403c96610fd99b96d626fe56dd1004e1b873be0c6d12f1f927db5f9b6cfad401ddba9d02e1b15ed302b30425426b1aee403d545329de5098bf982fcf5103be4aaf7332b0fc207f7c12cb704f9c366c7740feb6a9c1c9daa068ea29bac14d2129a557d468361cc6b65a2fa/master.m3u8';

	const firstEp = {
		subtitles: [
			{
				url: 'https://cc.zorores.com/70/ab/70ab4ae8a5c8a6892809f92be5fa0e07/eng-2.vtt',
				lang: 'English'
			},
			{
				url: 'https://prev.zorores.com/_a_preview/a8/a8af262254ce582da62a4156a34501c4/thumbnails/sprite.vtt',
				lang: 'Thumbnails'
			}
		],
		intro: {
			start: 0,
			end: 110
		}
	};

	const setSubsLang = (lang) => {
		if (lang.subtitles) {
			const allowedLanguages = ['Russian', 'English', 'German', 'Spanish', 'Arabic'];
			const subtitles = lang.subtitles;
			for (const sub of subtitles) {
				if (!allowedLanguages.includes(sub.lang)) {
					continue;
				}
				const track = document.createElement('track');
				track.srclang = sub.lang;
				track.label = sub.lang;
				track.src = `${proxy}${sub.url}`;
				player.addCaptions(track);
			}
		}
	}
	onMount(() => {
		    player = new OpenPlayerJS('video', {
			mode: 'responsive',
			detachMenus: true,
			autoplay: true,
			alwaysVisible: false,
			step: 0,
			hidePlayBtnTimer: 100,
			media: {
				pauseOnClick: true
			},
			hls: {
				smoothQualityChange: true,
				overrideNative: true
			},
			controls: {
				layers: {
					left: ['play', 'time', 'volume'],
					middle: ['progress'],
					right: ['captions', 'settings', 'levels', 'fullscreen']
				}
			}
		});
		player.src = {
			src: `${proxy}/${url}`,
			type: 'application/x-mpegURL'
		};
		setSubsLang(firstEp);
		player.init();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.css"
	/>
</svelte:head>

<h1>OpenPlayer tutuorial</h1>

<div class="player">
	<video class="op-player__media" id="video" controls playsinline />
</div>
