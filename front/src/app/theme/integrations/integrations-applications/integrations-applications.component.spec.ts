import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsApplicationsComponent } from './integrations-applications.component';

describe('IntegrationsApplicationsComponent', () => {
  let component: IntegrationsApplicationsComponent;
  let fixture: ComponentFixture<IntegrationsApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationsApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationsApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
