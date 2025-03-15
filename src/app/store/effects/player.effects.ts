import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { setPlayerName, setPlayerNameSuccess } from '../actions/player.actions';
import { of } from 'rxjs';

@Injectable()
export class PlayerEffects {
  // Solution to possible bug according to:
  // https://stackoverflow.com/questions/78966799/why-the-actions-object-from-ngrx-effects-cannot-be-injected-despite-including-th
  private readonly actions$: Actions = inject(Actions);

  setPlayerName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setPlayerName),
      mergeMap(action =>
        of(action).pipe(
          map(action => setPlayerNameSuccess({ nickname: action.nickname }))
        )
      )
    )
  );
}
