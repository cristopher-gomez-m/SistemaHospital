import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';

const routes: Routes = [
    { path: '', component: MedicosComponent, children: [
        { path: '', component: PacientesComponent },
        { path: 'historial/:paciente_id', component: HistorialClinicoComponent }
      ]  
    },
      
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MedicosRoutingModule { }