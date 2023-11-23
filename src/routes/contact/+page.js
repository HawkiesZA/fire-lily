export async function load({ fetch }) {
	const response = await fetch('api/rskey')
	const key = await response.json()
	return { key }
}