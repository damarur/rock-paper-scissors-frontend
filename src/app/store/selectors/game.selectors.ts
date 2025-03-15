import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from '../states/game.state';

export const selectGameState = createFeatureSelector<GameState>('game');

export const selectUserStats = createSelector(
  selectGameState,
  (state: GameState) => state.userStats
);

export const selectCurrentGame = createSelector(
  selectGameState,
  (state: GameState) => state.currentGame
);

export const selectGameResult = createSelector(
  selectGameState,
  (state: GameState) => state.gameResult
);

export const selectLoading = createSelector(
  selectGameState,
  (state: GameState) => state.loading
);

export const selectError = createSelector(
  selectGameState,
  (state: GameState) => state.error
);
