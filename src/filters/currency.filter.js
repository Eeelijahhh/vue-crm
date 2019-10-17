export default function currencyFilter(value, currency = "EUR") {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency
  }).format(value)
}