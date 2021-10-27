import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BT2Component } from './bt2.component';

describe('BT2Component', () => {
  let component: BT2Component;
  let fixture: ComponentFixture<BT2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BT2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
