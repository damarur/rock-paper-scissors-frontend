import { Game, GameResult, UserStats } from '../models/game.model';

export interface GameState {
  userStats?: UserStats;
  currentGame?: Game;
  gameResult?: GameResult;
  loading: boolean;
  error: string | null;
}

export const initialGameState: GameState = {
  loading: false,
  error: null,
};
