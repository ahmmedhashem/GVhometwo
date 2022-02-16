import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeThreeComponent } from './main-home-three.component';

describe('MainHomeThreeComponent', () => {
  let component: MainHomeThreeComponent;
  let fixture: ComponentFixture<MainHomeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
