import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicUserComponent } from './basic-user.component';


describe('BasicUserComponent', () => {
  let component: BasicUserComponent;
  let fixture: ComponentFixture<BasicUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
