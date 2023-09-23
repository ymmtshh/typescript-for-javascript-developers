export {};

type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Hum',
  age: 43,
};

interface ObjectInterface {
  name: string;
  age: number;
}

const hoge: ObjectInterface = {
  name: 'goo',
  age: 77,
};
