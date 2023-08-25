import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilarUnidadesPaginaComponent } from './alquilar-unidades-pagina.component';

describe('AlquilarUnidadesPaginaComponent', () => {
  let component: AlquilarUnidadesPaginaComponent;
  let fixture: ComponentFixture<AlquilarUnidadesPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlquilarUnidadesPaginaComponent]
    });
    fixture = TestBed.createComponent(AlquilarUnidadesPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
