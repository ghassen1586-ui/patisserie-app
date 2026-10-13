import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patisserie } from './patisserie';

describe('Patisserie', () => {
  let component: Patisserie;
  let fixture: ComponentFixture<Patisserie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patisserie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patisserie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
