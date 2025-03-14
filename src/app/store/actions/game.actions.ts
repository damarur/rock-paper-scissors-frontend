import { createAction, props } from '@ngrx/store';
import { Game, GameResult } from '../models/game.model';

// Play Game
export const playGame = createAction(
  '[Game] Play Game',
  props<{ game: Game }>()
);

// Play Game Success
export const playGameSuccess = createAction(
  '[Game] Play Game Success',
  props<{ gameResult: GameResult }>()
);

// Play Game Failure
export const playGameFailure = createAction(
  '[Game] Play Game Failure',
  props<{ error: string }>()
);
