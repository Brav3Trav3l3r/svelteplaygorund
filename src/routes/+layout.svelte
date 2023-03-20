<script>
	import "../app.css";
	let inputVal;
	import { page } from '$app/stores';
	export let form;
	import { invalidateAll, goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	let forms;
</script>

<a href="/">Home</a>
<a href="/open">open</a>

<!-- <form
	method="POST"
	action="?/changeSrc"
	name="form"
	bind:this={forms}
	use:enhance={({ form, data, action }) => {
		console.log(form);
		console.log(data);
		console.log(action);
		return async ({ result }) => {
			console.log(result);
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
</form> -->
<div class="body p-4">

	<slot />
</div>
