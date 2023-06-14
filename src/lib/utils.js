/**
 * @typedef {import('intl').DateTimeFormatOptions['dateStyle']} DateStyle
 */

/**
 * Format the date with the given date style.
 * @param {String} date - The date string to format.
 * @param {DateStyle} [dateStyle='medium'] - The date style to apply.
 * @param {string} [locales='en'] - The locale for formatting.
 * @returns {string} The formatted date string.
 */
export function formatDate(date, dateStyle = 'medium', locales = 'en') {
  const formatter = new Intl.DateTimeFormat(locales, {
    dateStyle: dateStyle
  });
  return formatter.format(new Date(date));
}
