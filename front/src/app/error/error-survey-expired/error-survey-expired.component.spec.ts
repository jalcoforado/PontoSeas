import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSurveyExpiredComponent } from './error-survey-expired.component';

describe('ErrorSurveyExpiredComponent', () => {
  let component: ErrorSurveyExpiredComponent;
  let fixture: ComponentFixture<ErrorSurveyExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSurveyExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSurveyExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
