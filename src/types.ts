export interface Card {
  number: string;
  suite: string;
}

export interface PlayerDetails {
  name: string;
  hand: Card[];
}
