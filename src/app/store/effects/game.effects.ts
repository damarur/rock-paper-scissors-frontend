import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GameService } from '../../services/game.service';
import { GameResult } from '../models/game.model';
import {
  playGame,
  playGameFailure,
  playGameSuccess,
} from '../actions/game.actions';

@Injectable()
export class GameEffects {
  // Solution to possible bug according to:
  // https://stackoverflow.com/questions/78966799/why-the-actions-object-from-ngrx-effects-cannot-be-injected-despite-including-th
  private readonly actions$: Actions = inject(Actions);
  constructor(private readonly gameService: GameService) {}

  playGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playGame),
      mergeMap(action =>
        this.gameService.playGame(action.game).pipe(
          map((gameResult: GameResult) => playGameSuccess({ gameResult })),
          catchError(error => of(playGameFailure({ error: error.message })))
        )
      )
    )
  );
}
