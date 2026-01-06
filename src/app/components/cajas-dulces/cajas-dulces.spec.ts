import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasDulces } from './cajas-dulces';

describe('CajasDulces', () => {
  let component: CajasDulces;
  let fixture: ComponentFixture<CajasDulces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajasDulces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajasDulces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
