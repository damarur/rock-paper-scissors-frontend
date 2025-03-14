import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Choice, GameResult, Result } from '../../store/models/game.model';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  const initialState = {
    player: {},
    game: {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerComponent, TranslateModule.forRoot()],
      providers: [FaIconLibrary, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;

    component.name = 'Player 1';
    component.machine = false;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a choice when choose() is called', () => {
    spyOn(component.choice, 'emit');

    component.choose('ROCK');

    expect(component.currentChoice).toBe('ROCK');
    expect(component.choice.emit).toHaveBeenCalledWith('ROCK');
  });

  it('should update currentChoice based on gameResult when "machine" is true', () => {
    const gameResult: GameResult = {
      nickname: 'Player 1',
      machine_choice: Choice.PAPER,
      user_choice: Choice.ROCK,
      result: Result.LOSE,
    };
    component.machine = true;
    component.gameResult$ = of(gameResult);
    component.ngOnInit();
    expect(component.currentChoice).toBe('PAPER');
  });

  it('should not update currentChoice for gameResult if not machine', () => {
    const gameResult: GameResult = {
      nickname: 'Player 1',
      machine_choice: Choice.PAPER,
      user_choice: Choice.ROCK,
      result: Result.LOSE,
    };
    component.machine = false;
    component.gameResult$ = of(gameResult);
    component.ngOnInit();
    expect(component.currentChoice).toBe('');
  });
});
