export const formatCurrency = (value: number, currency: string) => {
  const symbol = currency === 'SGD' ? '$' : '';
  return `${symbol}${value.toFixed(2)}`;
};

export const formatMinutes = (minutes: number) => {
  if (minutes <= 0) {
    return 'Ready now';
  }
  return `${minutes} min${minutes === 1 ? '' : 's'}`;
};
