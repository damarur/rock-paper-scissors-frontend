import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game, GameResult, UserStats } from '../store/models/game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly playUrl = environment.apiUrl + '/play';
  private readonly gamesUrl = environment.apiUrl + '/games';

  constructor(private readonly http: HttpClient) {}

  playGame(game: Game): Observable<GameResult> {
    return this.http.post<GameResult>(this.playUrl, game);
  }

  getGames(nickname: string): Observable<UserStats> {
    return this.http.get<UserStats>(`${this.gamesUrl}?nickname=${nickname}`);
  }
}
