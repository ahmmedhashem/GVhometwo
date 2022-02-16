import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderfourComponent } from './sliderfour.component';

describe('SliderfourComponent', () => {
  let component: SliderfourComponent;
  let fixture: ComponentFixture<SliderfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
