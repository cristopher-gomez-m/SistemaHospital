import { NgModule } from "@angular/core";
import { ListarConsultoriosComponent } from "./listar-consultorios.component";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";


@NgModule({
    declarations: [
    ListarConsultoriosComponent
  ],
  imports:[
    CommonModule,
    AngularMaterialModule
  ],
})
export class ListarConsultoriosModule {
  
}