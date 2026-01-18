export function analyzeFee(amount) {
  const fee = amount * 0.001;
  return fee.toFixed(4);
}
