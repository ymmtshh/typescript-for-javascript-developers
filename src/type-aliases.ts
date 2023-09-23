export {};

type Mojiretsu = string;

const fooString: string = 'hello'
const fooMojiretsu: Mojiretsu = 'World'

type Profile = {
  name: string,
  age: number,
}

const example: Profile = {
  name: 'Hum',
  age: 43
}

const example2 = {
  name: 'Bob',
  jender: true
}

type Profile2 = typeof example2

const example3: Profile2 = {
  name: 'guu',
  jender: false
}