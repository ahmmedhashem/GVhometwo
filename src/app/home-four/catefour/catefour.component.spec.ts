import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatefourComponent } from './catefour.component';

describe('CatefourComponent', () => {
  let component: CatefourComponent;
  let fixture: ComponentFixture<CatefourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatefourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
