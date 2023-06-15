import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PacientesComponent } from './pacientes.component';
import { PacientesRoutingModule } from './pacientes.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AgendarCitaModule } from './agendar-cita/agendar-cita.module';
import { CitaAgendadaModule } from './cita-agendada/cita-agendada.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';

@NgModule({
  declarations: [
    PacientesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PacientesRoutingModule,
    AngularMaterialModule,
    AgendarCitaModule,
    CitaAgendadaModule,
    HistorialClinicoModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ]
})
export class PacientesModule { }
