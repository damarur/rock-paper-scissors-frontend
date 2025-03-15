import { Action, createReducer, on } from '@ngrx/store';
import { setPlayerName, setPlayerNameSuccess } from '../actions/player.actions';
import { initialPlayerState, PlayerState } from '../states/player.state';

export const playerReducer = createReducer(
  initialPlayerState,
  on(setPlayerName, (state, { nickname }) => ({ ...state, nickname })),
  on(setPlayerNameSuccess, (state, { nickname }) => ({ ...state, nickname }))
);

export function reducer(state: PlayerState | undefined, action: Action) {
  return playerReducer(state, action);
}
