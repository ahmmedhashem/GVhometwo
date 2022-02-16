import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimnailThreeComponent } from './testimnail-three.component';

describe('TestimnailThreeComponent', () => {
  let component: TestimnailThreeComponent;
  let fixture: ComponentFixture<TestimnailThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimnailThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimnailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
