import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarConsultorioComponent } from './editar-consultorio.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [EditarConsultorioComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class EditarConsultorioModule { }
