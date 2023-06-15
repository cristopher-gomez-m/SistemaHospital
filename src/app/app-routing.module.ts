import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pacientes', loadChildren: () => import('./pacientes/pacientes.module').then(x => x.PacientesModule) },
    { path: 'medicos', loadChildren: () => import('./medicos/medicos.module').then(x => x.MedicosModule) },
    { path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then(x => x.AdministradorModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }