import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarConsultorioComponent } from './agregar-consultorio.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarConsultorioComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AgregarConsultorioModule { }
