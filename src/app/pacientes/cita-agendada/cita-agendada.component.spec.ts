import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaAgendadaComponent } from './cita-agendada.component';

describe('CitaAgendadaComponent', () => {
  let component: CitaAgendadaComponent;
  let fixture: ComponentFixture<CitaAgendadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaAgendadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaAgendadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
