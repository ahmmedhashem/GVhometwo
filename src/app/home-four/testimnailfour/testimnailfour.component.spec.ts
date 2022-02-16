import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimnailfourComponent } from './testimnailfour.component';

describe('TestimnailfourComponent', () => {
  let component: TestimnailfourComponent;
  let fixture: ComponentFixture<TestimnailfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimnailfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimnailfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
