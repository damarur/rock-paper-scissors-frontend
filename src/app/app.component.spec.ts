import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let spinnerServiceSpy: jasmine.SpyObj<NgxSpinnerService>;
  let storeSpy: jasmine.SpyObj<Store<{ game: { loading: boolean } }>>;

  beforeEach(async () => {
    // Create spies for injected services
    translateServiceSpy = jasmine.createSpyObj('TranslateService', [
      'setDefaultLang',
      'getBrowserLang',
      'use',
    ]);
    spinnerServiceSpy = jasmine.createSpyObj('NgxSpinnerService', [
      'show',
      'hide',
    ]);
    storeSpy = jasmine.createSpyObj('Store', ['select']);

    // Mock state selector
    storeSpy.select.and.returnValue(
      of({ loading: false }) // Default subscription mock
    );

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: TranslateService, useValue: translateServiceSpy },
        { provide: NgxSpinnerService, useValue: spinnerServiceSpy },
        { provide: Store, useValue: storeSpy },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the default language as "en"', () => {
    TestBed.createComponent(AppComponent);
    expect(translateServiceSpy.setDefaultLang).toHaveBeenCalledWith('en');
  });

  it('should use the browser language if supported, otherwise fallback to "en"', () => {
    translateServiceSpy.getBrowserLang.and.returnValue('es');
    TestBed.createComponent(AppComponent);
    expect(translateServiceSpy.use).toHaveBeenCalledWith('es');

    translateServiceSpy.getBrowserLang.and.returnValue('fr');
    TestBed.createComponent(AppComponent);
    expect(translateServiceSpy.use).toHaveBeenCalledWith('en');
  });

  it('should show the spinner when game.loading is true', () => {
    storeSpy.select.and.returnValue(of({ loading: true })); // Mock loading state
    TestBed.createComponent(AppComponent);
    expect(spinnerServiceSpy.show).toHaveBeenCalled();
  });

  it('should hide the spinner when game.loading is false', done => {
    storeSpy.select.and.returnValue(of({ loading: false })); // Mock not loading state
    TestBed.createComponent(AppComponent);

    // Use setTimeout to simulate delay in spinner hiding
    setTimeout(() => {
      expect(spinnerServiceSpy.hide).toHaveBeenCalled();
      done(); // Mark the test as complete when async behavior is resolved
    }, 500);
  });
});
