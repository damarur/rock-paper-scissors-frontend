import { Action, createReducer, on } from '@ngrx/store';
import {
  addGameSuccess,
  loadGame,
  loadGameFailure,
  loadGameSuccess,
} from '../actions/game.actions';
import { GameState, initialGameState } from '../states/game.state';

export const gameReducer = createReducer(
  initialGameState,
  on(loadGame, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadGameSuccess, (state, { game }) => ({
    ...state,
    loading: false,
    game,
  })),
  on(loadGameFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addGameSuccess, (state, { game }) => ({
    ...state,
    game: game,
  }))
);

export function reducer(state: GameState | undefined, action: Action) {
  return gameReducer(state, action);
}
