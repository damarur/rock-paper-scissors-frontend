import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedLanguage to the current language from TranslateService', () => {
    expect(component.selectedLanguage).toBe('en');
  });

  it('should update selectedLanguage when changeLanguage is called', () => {
    const newLanguage = 'es';
    component.changeLanguage(newLanguage);
    fixture.detectChanges();
    expect(component.selectedLanguage).toBe('es');
  });

  it('should render the language selector with options', () => {
    const selectElement: HTMLElement =
      fixture.nativeElement.querySelector('mat-select');
    expect(selectElement).toBeTruthy();
  });
});
