import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Choice, Game, GameResult, Result } from '../store/models/game.model';
import { environment } from '../../environments/environment';
import { GameService } from './game.service';
import { provideHttpClient } from '@angular/common/http';

describe('GameService', () => {
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      providers: [GameService, provideHttpClient(), provideHttpClientTesting()],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GameService);
  });

  afterEach(() => {
    // Ensure no pending HTTP requests left open
    httpMock.verify();
  });

  it('should call the playGame endpoint and return GameResult', () => {
    const mockGame: Game = {
      nickname: 'Player 1',
      choice: Choice.PAPER,
    }; // Adjust properties to match your Game model structure

    const mockGameResult: GameResult = {
      nickname: 'Player 1',
      user_choice: Choice.PAPER,
      machine_choice: Choice.SCISSORS,
      result: Result.LOSE,
    }; // Adjust properties to match your GameResult model structure

    // Call the playGame method
    service.playGame(mockGame).subscribe((result: GameResult) => {
      expect(result).toEqual(mockGameResult);
    });

    // Mock the HTTP request and respond with mock data
    const req = httpMock.expectOne(environment.apiUrl + '/play');
    expect(req.request.method).toBe('POST'); // Ensure it's a POST request
    req.flush(mockGameResult); // Respond with mock data
  });
});
