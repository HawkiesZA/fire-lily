<script>
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav>
  <!-- Logo -->
  	
	<a href="/" class="title">
		<img src="/logo.jpeg" alt='Fire Lily'/>
	</a>

  <!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/gallery">Gallery</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>

  <!-- Theme -->
  <Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}

	img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
</style>
