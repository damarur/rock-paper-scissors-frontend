import { createAction, props } from '@ngrx/store';

// Action to set the player's name
export const setPlayerName = createAction(
  '[Player] Set Player NickName',
  props<{ nickname: string }>()
);
