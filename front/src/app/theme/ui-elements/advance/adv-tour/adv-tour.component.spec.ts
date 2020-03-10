import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTourComponent } from './adv-tour.component';

describe('AdvTourComponent', () => {
  let component: AdvTourComponent;
  let fixture: ComponentFixture<AdvTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
