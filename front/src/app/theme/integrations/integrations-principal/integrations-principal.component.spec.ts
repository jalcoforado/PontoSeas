import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsPrincipalComponent } from './integrations-principal.component';

describe('IntegrationsPrincipalComponent', () => {
  let component: IntegrationsPrincipalComponent;
  let fixture: ComponentFixture<IntegrationsPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationsPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationsPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
