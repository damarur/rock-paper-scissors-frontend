import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Game } from '../store/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly apiUrl = 'https://api.example.com/games';

  constructor(private readonly http: HttpClient) {}

  getGames(): Observable<Game> {
    return this.http.get<Game>(this.apiUrl);
  }

  addGame(game: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, game, { headers }).pipe(
      catchError(error => {
        console.error('Error adding game:', error);
        throw error;
      })
    );
  }
}
