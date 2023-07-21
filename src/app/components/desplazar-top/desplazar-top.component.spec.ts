import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplazarTopComponent } from './desplazar-top.component';

describe('DesplazarTopComponent', () => {
  let component: DesplazarTopComponent;
  let fixture: ComponentFixture<DesplazarTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesplazarTopComponent]
    });
    fixture = TestBed.createComponent(DesplazarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
