export interface Game {
  nickname: string;
  choice: Choice;
}

export interface GameResult {
  nickname: string;
  user_choice: Choice;
  machine_choice: Choice;
  result: Result;
}

export enum Choice {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export enum Result {
  WIN = 'WIN',
  LOSE = 'LOSE',
  DRAW = 'DRAW',
}
