import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CitaService } from 'src/app/services/cita.service';
import { Router } from '@angular/router';
import { ValueService } from 'src/app/services/value.service';
import { Cita, CitaDisplay } from 'src/app/models/cita';
import { MatTableDataSource } from '@angular/material/table';

export interface CitaAgendada {
  turno: number;
  consultorio: string;
  fecha: Date;
  horario: string;
}




@Component({
  selector: 'app-cita-agendada',
  templateUrl: './cita-agendada.component.html',
  styleUrls: ['./cita-agendada.component.css']
})
export class CitaAgendadaComponent implements OnInit {
  data!: CitaDisplay[];
  displayedColumns: string[] = ['turno', 'consultorio', 'fecha', 'horario'];
  dataSource= new MatTableDataSource<CitaDisplay>();
  constructor(
    private router: Router,
    private citaService: CitaService,
    private valueService: ValueService
  ) {}

  ngOnInit(): void {
    const paciente_id= this.valueService.id;
    this.citaService.getAllById(paciente_id).subscribe(
      {
        next: async (res) =>{
          console.log(res);
          this.data=res;
          console.log(this.data);
          this.dataSource = new MatTableDataSource(this.data);
        },
      }
    );
  }
}
