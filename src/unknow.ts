export {};

const kannsu = (): number => 43;

let numberAny: any = kannsu();
let numberUnknown: unknown = kannsu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown);

if(typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}