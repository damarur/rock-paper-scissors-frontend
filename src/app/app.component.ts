import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { GameState } from './store/states/game.state';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HeaderComponent,
    MatIconModule,
    RouterOutlet,
    TranslateModule,
    NgxSpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly translate: TranslateService,
    private readonly spinner: NgxSpinnerService,
    private readonly store: Store<{ game: GameState }>
  ) {
    this.translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    if (browserLang != null) {
      this.translate.use(
        RegExp(/en|es/).exec(browserLang) ? browserLang : 'en'
      );
    }
    this.store
      .select(state => state.game)
      .subscribe(game => {
        if (game.loading) {
          this.spinner.show();
        } else {
          this.spinner.hide();
        }
      });
  }
}
