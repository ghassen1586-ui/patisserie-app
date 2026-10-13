import { ComponentFixture, TestBed } from '@angular/core/testing';

import {liverison } from './liverison';

describe('liverison', () => {
  let component: liverison;
  let fixture: ComponentFixture<liverison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [liverison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(liverison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
