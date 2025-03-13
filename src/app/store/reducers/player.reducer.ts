import { Action, createReducer, on } from '@ngrx/store';
import { setPlayerName } from '../actions/player.actions';
import { initialPlayerState } from '../states/player.state';

// Defining player state shape
export interface PlayerState {
  nickname: string | null;
}

// Reducer function
export const playerReducer = createReducer(
  initialPlayerState,
  on(setPlayerName, (state, { nickname }) => ({ ...state, nickname }))
);

export function reducer(state: PlayerState | undefined, action: Action) {
  return playerReducer(state, action);
}
