import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AdministradorRoutingModule } from './administrador.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ListarConsultoriosModule } from './listar-consultorios/listar-consultorios.module';
import { AgregarConsultorioModule } from './agregar-consultorio/agregar-consultorio.module';
import { EditarConsultorioModule } from './editar-consultorio/editar-consultorio.module';
import { ListarMedicosModule } from './listar-medicos/listar-medicos.module';
import { AgregarMedicoModule } from './agregar-medico/agregar-medico.module';
import { EditarMedicoModule } from './editar-medico/editar-medico.module';
import { ListarPacientesModule } from './listar-pacientes/listar-pacientes.module';
import { AgregarPacienteModule } from './agregar-paciente/agregar-paciente.module';
import { EditarPacienteModule } from './editar-paciente/editar-paciente.module';
import { ConsultasExternasModule } from './consultas-externas/consultas-externas.module';


@NgModule({
  declarations: [AdministradorComponent, NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AdministradorRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ListarConsultoriosModule,
    AgregarConsultorioModule,
    EditarConsultorioModule,
    ListarMedicosModule,
    AgregarMedicoModule,
    EditarMedicoModule,
    ListarPacientesModule,
    AgregarPacienteModule,
    EditarPacienteModule,
    ConsultasExternasModule
  ]
})
export class AdministradorModule { }
