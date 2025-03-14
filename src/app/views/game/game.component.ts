import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerComponent } from '../../components/player/player.component';
import { selectPlayerName } from '../../store/selectors/player.selectors';
import { GameState } from '../../store/states/game.state';
import { Choice, Game, GameResult } from '../../store/models/game.model';
import {
  selectCurrentGame,
  selectError,
  selectGameResult,
  selectGames,
  selectLoading,
} from '../../store/selectors/game.selectors';
import { playGame } from '../../store/actions/game.actions';
import { PlayerState } from '../../store/states/player.state';

@Component({
  selector: 'app-game',
  imports: [PlayerComponent, TranslateModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  playerName$: Observable<string>;
  games$: Observable<Game[]>;
  currentGame$: Observable<Game | undefined>;
  gameResult$: Observable<GameResult | undefined>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  name: string = '';

  constructor(
    private readonly store: Store<{ player: PlayerState; game: GameState }>
  ) {
    this.playerName$ = this.store.select(selectPlayerName);
    this.games$ = this.store.select(selectGames);
    this.currentGame$ = this.store.select(selectCurrentGame);
    this.gameResult$ = this.store.select(selectGameResult);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.playerName$.subscribe(name => (this.name = name));
  }

  playGame(choice: string): void {
    const choiceEnumValue = Choice[choice as keyof typeof Choice];
    const game: Game = { nickname: this.name, choice: choiceEnumValue };
    this.store.dispatch(playGame({ game }));
  }
}
