import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHomeComponent } from './sliderHome.component';

describe('SliderComponent', () => {
  let component: SliderHomeComponent;
  let fixture: ComponentFixture<SliderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
