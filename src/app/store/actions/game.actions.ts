import { createAction, props } from '@ngrx/store';
import { Game, GameResult, UserStats } from '../models/game.model';

export const playGame = createAction(
  '[Game] Play Game',
  props<{ game: Game }>()
);

export const playGameSuccess = createAction(
  '[Game] Play Game Success',
  props<{ gameResult: GameResult }>()
);

export const playGameFailure = createAction(
  '[Game] Play Game Failure',
  props<{ error: string }>()
);

export const getGames = createAction(
  '[Game] Get Games',
  props<{ nickname: string }>()
);

export const getGamesSuccess = createAction(
  '[Game] Get Games Success',
  props<{ userStats: UserStats }>()
);

export const getGamesFailure = createAction(
  '[Game] Get Games Failure',
  props<{ error: string }>()
);
