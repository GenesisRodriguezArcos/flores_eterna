import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flores } from './flores';

describe('Flores', () => {
  let component: Flores;
  let fixture: ComponentFixture<Flores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
