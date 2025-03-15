import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { reducer as playerReducer } from './store/reducers/player.reducer';
import { reducer as gameReducer } from './store/reducers/game.reducer';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideEffects } from '@ngrx/effects';
import { GameEffects } from './store/effects/game.effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerEffects } from './store/effects/player.effects';

export function HttpLoaderFactory(http: HttpClient) {
  // Loads translations from `/assets/i18n`
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ player: playerReducer, game: gameReducer }),
    provideHttpClient(withInterceptorsFromDi()),
    provideEffects(GameEffects, PlayerEffects),
    importProvidersFrom(
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
        isolate: false,
        useDefaultLang: true,
      }),
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ),
  ],
};
