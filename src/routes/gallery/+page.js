/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('api/images')
	const images = await response.json()
	return { images }
}