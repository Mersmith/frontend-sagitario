import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosFlotantesComponent } from './iconos-flotantes.component';

describe('IconosFlotantesComponent', () => {
  let component: IconosFlotantesComponent;
  let fixture: ComponentFixture<IconosFlotantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconosFlotantesComponent]
    });
    fixture = TestBed.createComponent(IconosFlotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
