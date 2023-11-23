import { Datastore } from '@google-cloud/datastore'
import { dev } from '$app/environment';

const RECAPTCHA_SITE_KEY = 'RECAPTCHA_SITE_KEY'
const SENDGRID_API_KEY = 'SENDGRID_API_KEY'
const DB_ID = 'firelilydb'

const datastore = new Datastore({ databaseId: DB_ID, })

/**
 * @type {Record<string, string>}
 */
let savedSettings = {}

/**
 * Retrieves the Recaptcha site key from the saved settings.
 *
 * @return {string} The Recaptcha site key, or an empty string if not found.
 */
export const getRecaptchaSiteKey = () => {
    console.log('getRecaptchaSiteKey')
    if (dev) {
        console.log('Getting recaptchakey 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI')
        return '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    }
    if (RECAPTCHA_SITE_KEY in savedSettings) {
        console.log('Getting stored recaptchakey ', savedSettings[RECAPTCHA_SITE_KEY])
        return savedSettings[RECAPTCHA_SITE_KEY]
    }
    return ''
}

/**
 * Retrieves the SendGrid API key from the saved settings.
 *
 * @return {string} The SendGrid API key, or an empty string if it is not found.
 */
export const getSendGridApiKey = () => {
    if (SENDGRID_API_KEY in savedSettings) {
        console.log('Getting sendgridkey ', savedSettings[SENDGRID_API_KEY])
        return savedSettings[SENDGRID_API_KEY]
    }
    return ''
}

export const getSettings = async () => {
    console.log('Getting settings')
    const query = datastore.createQuery('Settings')
    const [settings] = await datastore.runQuery(query)
    if (settings.length > 0) {
        savedSettings = settings.reduce((obj, item) => (obj[item.key] = item.value, obj), {})
        console.log('Getting settings done', savedSettings)
    } else {
        throw new Error('Settings table is empty')
    }
}