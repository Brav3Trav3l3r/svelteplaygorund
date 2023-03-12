<script>
	export let data;
	import { invalidateAll, goto } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';
	export let form;
	import { enhance } from '$app/forms';
	let forms;
	// $: console.log(form?.queryObj ?? '');
	$: info = data.info;
</script>

<form
	method="POST"
	action="?/changeSrc"
	name="form"
	bind:this={forms}
	use:enhance={({ form, data, action }) => {
		console.log(form);
		console.log(data);
		console.log(action);
		return async ({ result }) => {
			console.log(result)
			if (result.type === 'success') {
				await invalidateAll();
			}
			// applyAction(result);
		};
	}}
>
	<select name="dub">
		<option value="true" id="true">true</option>
		<option value="false" id="false">false</option>
	</select>
	<select name="provider">
		<option value="gogo">gogo</option>
		<option value="zoro">zoro</option>
	</select>
	<button type="submit">Submit</button>
</form>

{#each info.episodes as eps}
	<h1>{eps.id}</h1>
{/each}
