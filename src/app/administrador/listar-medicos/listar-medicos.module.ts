import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarMedicosComponent } from './listar-medicos.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ListarMedicosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ListarMedicosModule { }
