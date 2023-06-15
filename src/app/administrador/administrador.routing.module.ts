import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ListarConsultoriosComponent } from './listar-consultorios/listar-consultorios.component';
import { EditarConsultorioComponent } from './editar-consultorio/editar-consultorio.component';
import { AgregarConsultorioComponent } from './agregar-consultorio/agregar-consultorio.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { AgregarMedicoComponent } from './agregar-medico/agregar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { ConsultasExternasComponent } from './consultas-externas/consultas-externas.component';
import { PacientesComponent } from '../medicos/pacientes/pacientes.component';
const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      { path: '', component: ListarConsultoriosComponent },
      {
        path: 'editar-consultorio/:consultorio_id',
        component: EditarConsultorioComponent,
      },
      { path: 'agregar-consultorio', component: AgregarConsultorioComponent },
      { path: 'listar-medicos', component: ListarMedicosComponent },
      { path: 'agregar-medico', component: AgregarMedicoComponent },
      { path: 'editar-medico/:medico_id', component: EditarMedicoComponent },
      { path: 'listar-pacientes', component: PacientesComponent },
      { path: 'agregar-paciente', component: AgregarPacienteComponent },
      { path: 'editar-paciente', component: EditarPacienteComponent },
      { path: 'consultas-externas', component: ConsultasExternasComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
