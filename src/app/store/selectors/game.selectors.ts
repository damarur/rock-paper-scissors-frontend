import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from '../states/game.state';

export const selectGameState = createFeatureSelector<GameState>('games');

export const selectGames = createSelector(
  selectGameState,
  (state: GameState) => state.game
);

export const selectLoading = createSelector(
  selectGameState,
  (state: GameState) => state.loading
);

export const selectError = createSelector(
  selectGameState,
  (state: GameState) => state.error
);
