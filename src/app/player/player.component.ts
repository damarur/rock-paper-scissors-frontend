import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'app-player',
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  inputs: ['name'],
})
export class PlayerComponent {
  @Input() name: string | undefined;

  constructor(library: FaIconLibrary) {
    library.addIcons(faHandPaper, faHandRock, faHandScissors);
  }
}
