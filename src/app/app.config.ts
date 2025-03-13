import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { playerReducer } from './store/reducers/player.reducer';
import { gameReducer } from './store/reducers/game.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot({ player: playerReducer, game: gameReducer }),
      EffectsModule.forRoot([])
    ),
  ],
};
