import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportePersonalPaginaComponent } from './transporte-personal-pagina.component';

describe('TransportePersonalPaginaComponent', () => {
  let component: TransportePersonalPaginaComponent;
  let fixture: ComponentFixture<TransportePersonalPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportePersonalPaginaComponent]
    });
    fixture = TestBed.createComponent(TransportePersonalPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
