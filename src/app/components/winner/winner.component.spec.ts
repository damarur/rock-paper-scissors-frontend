import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnerComponent } from './winner.component';
import { TranslateModule } from '@ngx-translate/core';
import { Result } from '../../store/models/game.model';
import { CommonModule } from '@angular/common';

describe('WinnerComponent', () => {
  let component: WinnerComponent;
  let fixture: ComponentFixture<WinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnerComponent, CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided result', () => {
    component.result = Result.WIN;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.winner')?.textContent).toBeDefined();
  });

  it('should handle undefined result gracefully', () => {
    component.result = undefined;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.winner')).toBeNull();
  });
});
