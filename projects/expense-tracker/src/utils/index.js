// Generate random ID
export function generateID() {
  return Math.floor(Math.random() * 100000000);
}

export function currencyFormatter(number) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
  }).format(number);
}
