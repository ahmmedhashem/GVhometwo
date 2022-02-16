import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfourComponent } from './blogfour.component';

describe('BlogfourComponent', () => {
  let component: BlogfourComponent;
  let fixture: ComponentFixture<BlogfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
