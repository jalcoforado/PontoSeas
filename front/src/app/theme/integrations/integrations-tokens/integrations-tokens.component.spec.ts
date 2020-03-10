import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsTokensComponent } from './integrations-tokens.component';

describe('IntegrationsTokensComponent', () => {
  let component: IntegrationsTokensComponent;
  let fixture: ComponentFixture<IntegrationsTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationsTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationsTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
