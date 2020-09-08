const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));

export default formatValue;
