import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerState } from '../store/states/player.state';

@Injectable({
  providedIn: 'root',
})
export class PlayerGuard implements CanActivate {
  constructor(
    private readonly store: Store<{ player: PlayerState }>,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select(state => state.player)
      .pipe(
        take(1),
        map(player => {
          if (player.nickname) {
            return true;
          } else {
            this.router.navigate(['/welcome']);
            return false;
          }
        })
      );
  }
}
