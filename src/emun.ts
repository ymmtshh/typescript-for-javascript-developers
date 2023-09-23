export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);

enum Colors {
  Red = '#ff0000',
  White = '#ffffff',
  Green = '#008800',
  Blue = '#0000ff',
  Black = '#000000', 
  // Yellow= '#ffff00',
}

let green = Colors.Green;
console.log(green);

enum Colors {
  Yellow = '#ffff00'
}

Colors.Yellow;