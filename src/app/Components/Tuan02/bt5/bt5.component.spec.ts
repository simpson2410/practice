import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BT5Component } from './bt5.component';

describe('BT5Component', () => {
  let component: BT5Component;
  let fixture: ComponentFixture<BT5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BT5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BT5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
