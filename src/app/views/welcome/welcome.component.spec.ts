import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { setPlayerName } from '../../store/actions/player.actions';
import { PlayerState } from '../../store/states/player.state';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let store: MockStore;
  let routerSpy: jasmine.SpyObj<Router>;

  const initialState = {
    player: { nickname: 'TestPlayer' } as PlayerState,
  };

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [
        WelcomeComponent,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the required fields', () => {
    expect(component.playerForm.contains('name')).toBeTrue();
    expect(component.playerForm.controls['name'].validator).toBeTruthy();
  });

  it('should mark name as invalid if empty', () => {
    const nameControl = component.playerForm.controls['name'];
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalse();
  });

  it('should dispatch setPlayerName action and navigate on valid form submission', () => {
    spyOn(store, 'dispatch');
    component.playerForm.controls['name'].setValue('Player123');

    component.submitName();

    expect(store.dispatch).toHaveBeenCalledWith(
      setPlayerName({ nickname: 'Player123' })
    );
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/game']);
  });

  it('should not dispatch setPlayerName action or navigate on empty name submission', () => {
    spyOn(store, 'dispatch');
    component.playerForm.controls['name'].setValue('');

    component.submitName();

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should subscribe to player$ observable', done => {
    const mockPlayerState: PlayerState = { nickname: 'TestPlayer' };
    store.setState({ player: mockPlayerState });

    component.player$.subscribe(playerState => {
      expect(playerState.nickname).toEqual('TestPlayer');
      done();
    });
  });
});
