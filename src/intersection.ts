export {};

type Pitcher = {
  throwingSpeed: number;
};

type Batter = {
  battingAvarage: number;
};

const DaimajinSasaki: Pitcher = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter = {
  battingAvarage: 0.367
}

// type TwowayPlayer = {
//   throwingSpeed: number;
//   battingAvarage: number;
// }

type TwoWayPlayer = Pitcher & Batter;
const OhtaniShehei: TwoWayPlayer = {
  throwingSpeed:165,
  battingAvarage: 0.286
}
