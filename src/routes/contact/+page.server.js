export const prerender = false;

import { getSendGridApiKey } from '../../lib/datastore'
import sgMail from '@sendgrid/mail'

const key = getSendGridApiKey()
sgMail.setApiKey(key)

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const data = await request.formData();
		const email = data.get('email');
		const message = data.get('message');
		console.log(`data ${email} ${message}`)

		const msg = {
			to: '', // TODO: add to settings
			from: '',
			subject: 'New mail from firelily.dance',
			text: `You got a new enquiry from ${email} with the following message: \n\n${message}`,
		}

		sgMail
			.send(msg)
			.then((response) => {
				console.log(response[0].statusCode)
				console.log(response[0].headers)
			})
			.catch((error) => {
				console.error(error)
			})
	}
};