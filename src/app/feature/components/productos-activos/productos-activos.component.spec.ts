import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosActivosComponent } from './productos-activos.component';

describe('ProductosActivosComponent', () => {
  let component: ProductosActivosComponent;
  let fixture: ComponentFixture<ProductosActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
