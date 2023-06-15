import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { CitaAgendadaComponent } from './cita-agendada.component';


@NgModule({
  declarations: [
    CitaAgendadaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AngularMaterialModule
  ]
})
export class CitaAgendadaModule { }
