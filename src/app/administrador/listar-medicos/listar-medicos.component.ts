import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MedicoDisplay } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';
@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit{
  data!: MedicoDisplay[];
  dataSource= new MatTableDataSource<MedicoDisplay>();
  displayedColumns: string[] = [
    'id',
    'email',
    'cedula',
    'nombre',
    'apellido',
    'direccion',
    'actions',
  ];
  constructor(
    private router: Router,
    private medicoService: MedicoService
    ){}

    ngOnInit(): void {
      this.medicoService.getAll().subscribe(
        {
          next: async (res)=>{
            this.data=res;
            console.log("data: ",this.data);
            this.dataSource = new MatTableDataSource(this.data);
          },
        }
      );
    }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addConsultorio() {
    this.router.navigate(['administrador/agregar-medico']);
  }
  editMedico(medico: MedicoDisplay) {
    const medico_id = medico.id;
    this.router.navigate(['administrador/editar-medico',medico_id]);
  }
  deleteMedico(medico:MedicoDisplay) {
    const medico_id = medico.id;
    this.medicoService.deleteMedico(medico_id).subscribe(() => {
      this.medicoService.getAll().subscribe({
        next: (res) => {
          console.log(res);
          this.data = res;
          this.dataSource = new MatTableDataSource(this.data);
        },
      });
    });
  }
}
