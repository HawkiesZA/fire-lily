<script>
	import { fade } from 'svelte/transition'

    /**
     * @type {string}
     */
	export let url
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
