import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class PlayerComponent {
  @Input() name: string = '';
  @Input() machine: boolean = false;
  @Output() choice = new EventEmitter<string>();

  constructor(library: FaIconLibrary) {
    library.addIcons(faHandPaper, faHandRock, faHandScissors);
  }

  choose(choice: string) {
    this.choice.emit(choice);
  }
}
