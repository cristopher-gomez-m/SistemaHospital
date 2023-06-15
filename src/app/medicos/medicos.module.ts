import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MedicosComponent } from './medicos.component';
import { MedicosRoutingModule } from './medicos.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PacientesModule } from './pacientes/pacientes.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';



@NgModule({
  declarations: [
    MedicosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    AngularMaterialModule,
    PacientesModule,
    HistorialClinicoModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MedicosModule { }
