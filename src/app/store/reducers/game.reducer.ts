import { Action, createReducer, on } from '@ngrx/store';
import {
  getGames,
  getGamesFailure,
  getGamesSuccess,
  playGame,
  playGameFailure,
  playGameSuccess,
} from '../actions/game.actions';
import { GameState, initialGameState } from '../states/game.state';

export const gameReducer = createReducer(
  initialGameState,
  on(playGame, (state, { game }) => ({
    ...state,
    currentGame: game,
    loading: true,
    error: null,
  })),
  on(playGameSuccess, (state, { gameResult }) => ({
    ...state,
    gameResult,
    loading: false,
  })),
  on(playGameFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(getGames, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getGamesSuccess, (state, { userStats }) => ({
    ...state,
    userStats,
    loading: false,
  })),
  on(getGamesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: GameState | undefined, action: Action) {
  return gameReducer(state, action);
}
