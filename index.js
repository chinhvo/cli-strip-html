/**
 * Cli Strip Html.
 *
 * Strip HTML in a JavaScript/Node.js string.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
module.exports = (str = '') => {
	const html = /<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi;
	const doubleSpace = /\s{2,}/g;
	return str.replace(html, '').replace(doubleSpace, ' ').trim();
};
// Author: Igor Dimitrijević (@igorskyflyer)

const rxHtmlCode: RegExp = /<[^>]+>([^<]+)?/gm
const rxHtml: RegExp = /<[^>]+>(?:[^<]+)?/gm

/**
 * Strips only the HTML code while keeping the text content.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtmlCode(html: string): string {
  if (typeof html !== 'string' || html.length === 0) {
    return ''
  }

  return html.replace(rxHtmlCode, '$1').trim()
}

/**
 * Strips HTML tags completely.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtml(html: string): string {
  if (typeof html !== 'string' || html.length === 0) {
    return ''
  }

  return html.replace(rxHtml, '').trim()
}
