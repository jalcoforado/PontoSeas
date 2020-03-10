import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreateComponent } from './survey-create.component';

describe('NpsSurveyComponent', () => {
  let component: SurveyCreateComponent;
  let fixture: ComponentFixture<SurveyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
