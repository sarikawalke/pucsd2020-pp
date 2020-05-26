import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersideComponentComponent } from './userside-component.component';

describe('UsersideComponentComponent', () => {
  let component: UsersideComponentComponent;
  let fixture: ComponentFixture<UsersideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
