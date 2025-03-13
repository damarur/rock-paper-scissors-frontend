import { createReducer, on } from '@ngrx/store';
import { setPlayerName } from '../actions/player.actions';

// Defining player state shape
export interface PlayerState {
  nickname: string | null;
}

// Initial state
export const initialState: PlayerState = {
  nickname: null,
};

// Reducer function
export const playerReducer = createReducer(
  initialState,
  on(setPlayerName, (state, { nickname }) => ({ ...state, nickname }))
);
