import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BT3Component } from './bt3.component';

describe('BT3Component', () => {
  let component: BT3Component;
  let fixture: ComponentFixture<BT3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BT3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
