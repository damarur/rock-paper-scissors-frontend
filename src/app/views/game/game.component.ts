import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerComponent } from '../../components/player/player.component';
import { selectPlayerName } from '../../store/selectors/player.selectors';
import { GameState } from '../../store/states/game.state';
import {
  Choice,
  Game,
  GameResult,
  Result,
  UserStats,
} from '../../store/models/game.model';
import {
  selectCurrentGame,
  selectError,
  selectGameResult,
  selectLoading,
  selectUserStats,
} from '../../store/selectors/game.selectors';
import { getGames, playGame } from '../../store/actions/game.actions';
import { PlayerState } from '../../store/states/player.state';
import { WinnerComponent } from '../../components/winner/winner.component';

@Component({
  selector: 'app-game',
  imports: [PlayerComponent, TranslateModule, WinnerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  playerName$: Observable<string | undefined>;
  userStats$: Observable<UserStats | undefined>;
  currentGame$: Observable<Game | undefined>;
  gameResult$: Observable<GameResult | undefined>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  name: string = '';
  result: Result | undefined = undefined;
  stats: UserStats | undefined = undefined;

  constructor(
    private readonly store: Store<{ player: PlayerState; game: GameState }>
  ) {
    this.playerName$ = this.store.select(selectPlayerName);
    this.userStats$ = this.store.select(selectUserStats);
    this.currentGame$ = this.store.select(selectCurrentGame);
    this.gameResult$ = this.store.select(selectGameResult);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.playerName$.subscribe(name => {
      if (name) {
        this.name = name;
        this.store.dispatch(getGames({ nickname: name }));
      }
    });
    this.gameResult$.subscribe(gameResult => {
      this.result = gameResult?.result;
    });
    this.userStats$.subscribe(userStats => {
      if (userStats) {
        this.stats = userStats;
      }
    });
  }

  playGame(choice: string): void {
    const choiceEnumValue = Choice[choice as keyof typeof Choice];
    const game: Game = { nickname: this.name, choice: choiceEnumValue };
    this.store.dispatch(playGame({ game }));
  }
}
