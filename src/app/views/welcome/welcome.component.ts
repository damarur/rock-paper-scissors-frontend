import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerState } from '../../store/reducers/player.reducer';
import { setPlayerName } from '../../store/actions/player.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, ReactiveFormsModule],
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
      name: [''],
    });
    this.player$ = this.store.select(state => state.player);
  }

  submitName() {
    const nickname = this.playerForm.get('name')?.value;
    if (nickname) {
      this.store.dispatch(setPlayerName({ nickname }));
      this.router.navigate(['/game']);
    }
  }
}
