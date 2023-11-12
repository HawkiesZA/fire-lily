export async function load({ fetch }) {
	const response = await fetch('api/posts')
    /**
     * @type {Post[]}
     */
	const posts = await response.json()
	return { posts }
}