export interface Game {
  nickname: string;
  choice: Choice;
}

export interface GameResult {
  nickname: string;
  userChoice: Choice;
  machineChoice: Choice;
  result: Result;
}

export enum Choice {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export enum Result {
  WIN = 'WIN',
  LOSS = 'LOSS',
  DRAW = 'DRAW',
}
