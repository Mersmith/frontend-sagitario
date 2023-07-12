import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamarComponent } from './llamar.component';

describe('LlamarComponent', () => {
  let component: LlamarComponent;
  let fixture: ComponentFixture<LlamarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamarComponent]
    });
    fixture = TestBed.createComponent(LlamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
