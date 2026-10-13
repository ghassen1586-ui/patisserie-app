import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jus } from './jus';

describe('Jus', () => {
  let component: Jus;
  let fixture: ComponentFixture<Jus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
