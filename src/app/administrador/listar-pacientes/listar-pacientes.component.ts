import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PacienteDisplay } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit{
  data!: PacienteDisplay[];
  constructor(
    private router: Router,
    private pacienteService: PacientesService
    ){}
    displayedColumns: string[] = [
      'id',
      'email',
      'nombre',
      'apellido',
      'direccion',
      'actions',
    ];
    dataSource = new MatTableDataSource<PacienteDisplay>();
  
    ngOnInit(): void {
      this.pacienteService.getAll().subscribe(
        {
          next: async (res)=>{
            console.log(res);
            this.data=res;
            this.dataSource = new MatTableDataSource(this.data);
          }
        }
      );
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    editElement(paciente: PacienteDisplay){
      const paciente_id= paciente.id;
      console.log(paciente_id);
      this.router.navigate(['/medicos/historial',paciente_id]);
    }
}
