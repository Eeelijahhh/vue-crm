export default function currencyFilter(value, currency = 'EUR') {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency
  }).format(value)
}
