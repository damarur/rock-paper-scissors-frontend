import { createAction, props } from '@ngrx/store';

export const setPlayerName = createAction(
  '[Player] Set Player NickName',
  props<{ nickname: string }>()
);

export const setPlayerNameSuccess = createAction(
  '[Game] Set Player NickName',
  props<{ nickname: string }>()
);
