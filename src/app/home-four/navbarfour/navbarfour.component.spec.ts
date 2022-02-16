import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfourComponent } from './navbarfour.component';

describe('NavbarfourComponent', () => {
  let component: NavbarfourComponent;
  let fixture: ComponentFixture<NavbarfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
