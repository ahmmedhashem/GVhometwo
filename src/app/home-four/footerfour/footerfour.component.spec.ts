import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfourComponent } from './footerfour.component';

describe('FooterfourComponent', () => {
  let component: FooterfourComponent;
  let fixture: ComponentFixture<FooterfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
