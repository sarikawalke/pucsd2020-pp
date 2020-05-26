import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupinfoComponent } from './user-groupinfo.component';

describe('UserGroupinfoComponent', () => {
  let component: UserGroupinfoComponent;
  let fixture: ComponentFixture<UserGroupinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
