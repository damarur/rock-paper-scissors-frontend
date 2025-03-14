import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GameComponent } from './game.component';
import { PlayerComponent } from '../../components/player/player.component';
import { WinnerComponent } from '../../components/winner/winner.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  selectCurrentGame,
  selectError,
  selectGameResult,
  selectGames,
  selectLoading,
} from '../../store/selectors/game.selectors';
import { playGame } from '../../store/actions/game.actions';
import {
  Choice,
  Game,
  GameResult,
  Result,
} from '../../store/models/game.model';
import { selectPlayerName } from '../../store/selectors/player.selectors';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  const initialState = {
    player: {
      name: 'TestPlayer',
    },
    game: {
      games: [],
      currentGame: undefined,
      gameResult: undefined,
      loading: false,
      error: null,
    },
  };

  const mockGameResult: GameResult = {
    nickname: 'Player 1',
    user_choice: Choice.SCISSORS,
    machine_choice: Choice.PAPER,
    result: Result.WIN,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameComponent,
        PlayerComponent,
        WinnerComponent,
        TranslateModule.forRoot(),
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

    // Mock selectors
    store.overrideSelector(selectPlayerName, initialState.player.name);
    store.overrideSelector(selectGames, initialState.game.games);
    store.overrideSelector(selectCurrentGame, initialState.game.currentGame);
    store.overrideSelector(selectGameResult, undefined);
    store.overrideSelector(selectLoading, false);
    store.overrideSelector(selectError, null);

    // Spy on store.dispatch
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize observables and variables correctly', () => {
    component.ngOnInit();

    component.playerName$.subscribe(name => {
      expect(name).toBe(initialState.player.name);
    });

    component.games$.subscribe(games => {
      expect(games).toEqual(initialState.game.games);
    });

    component.currentGame$.subscribe(game => {
      expect(game).toBeUndefined();
    });

    component.gameResult$.subscribe(gameResult => {
      expect(gameResult).toBeUndefined();
    });

    component.loading$.subscribe(loading => {
      expect(loading).toBeFalse();
    });

    component.error$.subscribe(error => {
      expect(error).toBeNull();
    });

    expect(component.name).toBe(initialState.player.name);
    expect(component.result).toBeUndefined();
  });

  it('should subscribe to gameResult and update "result" correctly', () => {
    store.overrideSelector(selectGameResult, mockGameResult);

    component.ngOnInit();

    component.gameResult$.subscribe(gameResult => {
      expect(gameResult).toEqual(mockGameResult);
    });

    expect(component.result).toBe(mockGameResult.result);
  });

  it('should dispatch playGame action when playGame is called', () => {
    const mockChoice = 'ROCK';
    const mockGame: Game = {
      nickname: initialState.player.name,
      choice: Choice[mockChoice as keyof typeof Choice],
    };

    component.name = initialState.player.name;
    component.playGame(mockChoice);

    expect(dispatchSpy).toHaveBeenCalledWith(playGame({ game: mockGame }));
  });
});
