/**
 * @typedef {Intl.DateTimeFormatOptions['dateStyle']} DateStyle
 */

/**
 * Format a date string according to the specified style and locale.
 *
 * @param {string} date - The date string to format.
 * @param {DateStyle} [dateStyle='medium'] - The style for formatting the date.
 * @param {string} [locales='en'] - The locale for formatting the date.
 * @returns {string} The formatted date string.
 */
export function formatDate(date, dateStyle = 'medium', locales = 'en') {
    // Safari is mad about dashes in the date
    const dateToFormat = new Date(date.replace('/-/g', '/'));
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
    return dateFormatter.format(dateToFormat);
}
  