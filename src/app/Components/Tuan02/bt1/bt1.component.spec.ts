import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BT1Component } from './bt1.component';

describe('BT1Component', () => {
  let component: BT1Component;
  let fixture: ComponentFixture<BT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BT1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
