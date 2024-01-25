/**
 * Formats a number as a string with the specified currency symbol.
 *
 * @param {number} number - The number to be a converted into currency format.
 * @returns {string} the formatted with the currency symbol.
 */
export function formatToCurrency(number) {
	return new Intl.NumberFormat('ru-RU', {
		currency: 'RUB',
		style: 'currency'
	}).format(number)
}
