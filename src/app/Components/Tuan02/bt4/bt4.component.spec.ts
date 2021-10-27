import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BT4Component } from './bt4.component';

describe('BT4Component', () => {
  let component: BT4Component;
  let fixture: ComponentFixture<BT4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BT4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
