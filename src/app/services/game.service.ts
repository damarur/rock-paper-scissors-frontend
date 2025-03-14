import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game, GameResult } from '../store/models/game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly gamesUrl = environment.apiUrl + '/play';

  constructor(private readonly http: HttpClient) {}

  playGame(game: Game): Observable<GameResult> {
    return this.http.post<GameResult>(this.gamesUrl, game);
  }
}
