import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faHandPaper,
  faHandRock,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { PlayerState } from '../../store/states/player.state';
import { GameState } from '../../store/states/game.state';
import {
  selectCurrentGame,
  selectGameResult,
} from '../../store/selectors/game.selectors';
import { Observable } from 'rxjs';
import { Game, GameResult } from '../../store/models/game.model';

@Component({
  selector: 'app-player',
  imports: [
    CommonModule,
    MatCardModule,
    FontAwesomeModule,
    TranslateModule,
    MatIconButton,
    MatTooltip,
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  inputs: ['name'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() name: string = '';
  @Input() score: number | undefined = undefined;
  @Input() machine: boolean = false;
  @Output() choice = new EventEmitter<string>();
  currentGame$: Observable<Game | undefined>;
  gameResult$: Observable<GameResult | undefined>;
  currentChoice: string = '';

  constructor(
    library: FaIconLibrary,
    private readonly store: Store<{ player: PlayerState; game: GameState }>
  ) {
    library.addIcons(faHandPaper, faHandRock, faHandScissors);
    this.currentGame$ = this.store.select(selectCurrentGame);
    this.gameResult$ = this.store.select(selectGameResult);
  }

  choose(choice: string) {
    this.currentChoice = choice;
    this.choice.emit(choice);
  }

  ngOnInit(): void {
    this.gameResult$.subscribe(gameResult => {
      if (gameResult) {
        if (this.machine) {
          this.currentChoice = gameResult.machine_choice.toString();
        }
      }
    });
  }

  ngOnDestroy(): void {}
}
