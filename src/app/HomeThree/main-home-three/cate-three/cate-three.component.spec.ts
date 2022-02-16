import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateThreeComponent } from './cate-three.component';

describe('CateThreeComponent', () => {
  let component: CateThreeComponent;
  let fixture: ComponentFixture<CateThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
