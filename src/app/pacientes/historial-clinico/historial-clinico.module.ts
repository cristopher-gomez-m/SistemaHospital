import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HistorialClinicoComponent } from './historial-clinico.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    HistorialClinicoComponent
  ],
  imports: [
    CommonModule,
    NgFor,
    AngularMaterialModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
   MatCheckboxModule, JsonPipe
  ]
})
export class HistorialClinicoModule { }
