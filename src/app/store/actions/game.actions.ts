import { createAction, props } from '@ngrx/store';
import { Game } from '../models/game.model';

// Load Games
export const loadGame = createAction('[Game] Load Games');

// Load Games Success
export const loadGameSuccess = createAction(
  '[Game] Load Game Success',
  props<{ game: Game }>()
);

// Load Games Failure
export const loadGameFailure = createAction(
  '[Game] Load Games Failure',
  props<{ error: string }>()
);

// Add a Game
export const addGame = createAction('[Game] Add Game', props<{ game: Game }>());

// Add Game Success
export const addGameSuccess = createAction(
  '[Game] Add Game Success',
  props<{ game: Game }>()
);
