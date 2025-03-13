import { Routes } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { GameComponent } from './views/game/game.component';
import { PlayerGuard } from './guards/player-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent, canActivate: [PlayerGuard] },
];
