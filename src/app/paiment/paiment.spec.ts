import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paiment } from './paiment';

describe('Paiment', () => {
  let component: Paiment;
  let fixture: ComponentFixture<Paiment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paiment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paiment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
