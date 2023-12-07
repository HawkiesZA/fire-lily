import { getSettings } from './lib/datastore'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    await getSettings()
	const response = await resolve(event)
	return response
}