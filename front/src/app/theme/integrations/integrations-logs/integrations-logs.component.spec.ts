import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsLogsComponent } from './integrations-logs.component';

describe('IntegrationsLogsComponent', () => {
  let component: IntegrationsLogsComponent;
  let fixture: ComponentFixture<IntegrationsLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationsLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
