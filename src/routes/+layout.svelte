<script>
	import Footer from './footer.svelte'
	import Header from './header.svelte'
    import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'

    export let data
</script>

<div class="layout">
  <!-- Header -->
	<Header />
	<img src="/logo.jpeg" alt='Fire Lily'/>
	<main>
		<!-- Black hole for other content -->
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

  <!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

	img {
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
        border-radius: 50%;
		padding: 1em;
    }
</style>
