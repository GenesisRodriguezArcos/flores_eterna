import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peluches } from './peluches';

describe('Peluches', () => {
  let component: Peluches;
  let fixture: ComponentFixture<Peluches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peluches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peluches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
