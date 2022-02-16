import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavebarThreeComponent } from './navebar-three.component';

describe('NavebarThreeComponent', () => {
  let component: NavebarThreeComponent;
  let fixture: ComponentFixture<NavebarThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavebarThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavebarThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
