const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);
  console.log('çheguei aqui');
  
  return value * Math.pow(10, exponent);
}