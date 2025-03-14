import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../store/models/game.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-winner',
  imports: [CommonModule, TranslateModule],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.scss',
})
export class WinnerComponent {
  @Input() result: Result | undefined = undefined;
}
