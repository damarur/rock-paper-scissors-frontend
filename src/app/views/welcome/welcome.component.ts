import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setPlayerName } from '../../store/actions/player.actions';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlayerState } from '../../store/states/player.state';

@Component({
  selector: 'app-welcome',
  imports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  playerForm: FormGroup;
  player$: Observable<PlayerState>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<{ player: PlayerState }>,
    private readonly router: Router
  ) {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.player$ = this.store.select(state => state.player);
  }

  submitName($event: Event) {
    $event.preventDefault();
    const nickname = this.playerForm.get('name')?.value;
    if (nickname) {
      this.store.dispatch(setPlayerName({ nickname }));
      this.router.navigate(['/game']);
    }
  }
}
