import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicoComponent } from './historial-clinico.component';

describe('HistorialClinicoComponent', () => {
  let component: HistorialClinicoComponent;
  let fixture: ComponentFixture<HistorialClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialClinicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
