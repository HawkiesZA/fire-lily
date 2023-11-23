import { json } from '@sveltejs/kit'

import { getRecaptchaSiteKey } from '../../../lib/datastore'

export async function GET() {
	const key = getRecaptchaSiteKey()
	return json(key)
}