import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GameService } from '../../services/game.service';
import {
  loadGame,
  loadGameFailure,
  loadGameSuccess,
} from '../actions/game.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly gameService: GameService
  ) {}

  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGame),
      mergeMap(() =>
        this.gameService.getGames().pipe(
          map(game => loadGameSuccess({ game })),
          catchError(error => of(loadGameFailure({ error })))
        )
      )
    )
  );
}
