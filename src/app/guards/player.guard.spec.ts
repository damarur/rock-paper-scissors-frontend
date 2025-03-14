import { TestBed } from '@angular/core/testing';
import { PlayerGuard } from './player.guard';
import { provideRouter, Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PlayerState } from '../store/states/player.state';
import { cold } from 'jasmine-marbles';
import { routes } from '../app.routes';

describe('PlayerGuard', () => {
  let guard: PlayerGuard;
  let router: Router;
  let store: MockStore<{ player: PlayerState }>;

  const initialState = { player: { nickname: '' } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayerGuard,
        provideRouter(routes),
        provideMockStore({ initialState }),
      ],
    });

    guard = TestBed.inject(PlayerGuard);
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
  });

  it('should allow activation when player has a nickname', () => {
    // Mock state where player has a nickname
    store.setState({ player: { nickname: 'TestPlayer' } });

    const expected = cold('(a|)', { a: true });
    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('should navigate to `/` when player lacks a nickname', () => {
    spyOn(router, 'navigate');

    // Mock state where player has no nickname
    store.setState({ player: { nickname: '' } });

    const expected = cold('(a|)', { a: false });
    expect(guard.canActivate()).toBeObservable(expected);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
