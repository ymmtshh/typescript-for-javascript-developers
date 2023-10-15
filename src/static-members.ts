export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'shohei';
  static lastName: string = 'yamamoto';

  static work() {
    return `Hey, guys! This is ${this.firstName}!  Are you interested in Typescript? Let's dive into Typescript!`;
  }
}

// let me = new Me()
// console.log(me.isProgramer)

console.log(Me.isProgramer);
console.log(Me.work());
