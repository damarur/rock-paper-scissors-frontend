import { Game } from '../models/game.model';

export interface GameState {
  game: Game;
  loading: boolean;
  error: string | null;
}

export const initialGameState: GameState = {
  game: {
    nickname: undefined,
  },
  loading: false,
  error: null,
};
