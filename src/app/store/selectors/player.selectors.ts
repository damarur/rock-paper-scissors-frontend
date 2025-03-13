import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState } from '../states/player.state';

// Feature Selector: Access the entire 'player' state
export const selectPlayerState = createFeatureSelector<PlayerState>('player');

// Selector for player name
export const selectPlayerName = createSelector(
  selectPlayerState,
  (state: PlayerState) => state.nickname
);
