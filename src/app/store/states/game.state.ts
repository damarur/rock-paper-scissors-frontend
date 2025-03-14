import { Game, GameResult } from '../models/game.model';

export interface GameState {
  games: Game[];
  currentGame?: Game;
  gameResult?: GameResult;
  loading: boolean;
  error: string | null;
}

export const initialGameState: GameState = {
  games: [],
  loading: false,
  error: null,
};
