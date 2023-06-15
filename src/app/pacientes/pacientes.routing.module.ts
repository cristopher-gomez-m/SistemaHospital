import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CitaAgendadaComponent } from './cita-agendada/cita-agendada.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';

const routes: Routes = [
    { path: '', component: PacientesComponent, children: [
        { path: '', component: AgendarCitaComponent },
        { path: 'citas', component: CitaAgendadaComponent },
        { path: 'historial', component: HistorialClinicoComponent },
      ]  
    },
      
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PacientesRoutingModule { }