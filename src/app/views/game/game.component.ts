import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerComponent } from '../../components/player/player.component';
import { PlayerState } from '../../store/reducers/player.reducer';
import { selectPlayerName } from '../../store/selectors/player.selectors';

@Component({
  selector: 'app-game',
  imports: [PlayerComponent, AsyncPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  playerName$: Observable<string | null>;

  constructor(private readonly store: Store<{ player: PlayerState }>) {
    this.playerName$ = this.store.select(selectPlayerName);
  }
}
