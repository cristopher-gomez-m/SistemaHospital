import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { opcionesConsultorios } from 'src/app/models/opcionesConsultorios';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Cita } from 'src/app/models/cita';
import { ValueService } from 'src/app/services/value.service';
import { format } from 'date-fns';
import { CitaService } from 'src/app/services/cita.service';

interface Horario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css'],
})
export class AgendarCitaComponent implements OnInit {
  consultorios: opcionesConsultorios[] = [];
  validateFrm!: FormGroup;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horarios: Horario[] = [
    { value: '06:00 am - 12:00 am', viewValue: '06:00 am - 12:00 am' },
    { value: '13:00 pm - 18:00 pm', viewValue: '13:00 pm - 18:00 pm' },
    { value: '20:00 pm - 23:59 pm', viewValue: '20:00 pm - 23:59 pm' },
  ];

  constructor(
    private consultorioService: ConsultorioService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private valueService: ValueService,
    private citaService: CitaService
  ) {
    this.validateFrm = this.fb.group({
      especialidad: [
        '',
        [Validators.required, this.validateSeleccionEspecialidad],
      ],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
    });
  }

  async ngOnInit() {
    let promise1 = await this.getConsultoriosNames();
    Promise.all([promise1]);
  }

  validateSeleccionEspecialidad(control: AbstractControl) {
    if (control.value === null || control.value === '') {
      return { required: true };
    }
    return null;
  }

  submitForm() {
    if (this.validateFrm.valid) {
      this.addCita(this.validateFrm.value);
      console.log('prueba');
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  async getConsultoriosNames() {
    try {
      let response = await this.consultorioService.getConsultorios();
      const opcionesConsultorios: opcionesConsultorios[] = [];
      console.log(response);
      response.forEach((consultorio: { id: any; especialidad: any }) => {
        const opcionConsultorio = {
          id: consultorio.id,
          especialidad: `${consultorio.especialidad}`,
        };
        Array.prototype.push.apply(opcionesConsultorios, [opcionConsultorio]);
      });
      this.consultorios.push(...opcionesConsultorios);
      Promise.resolve();
    } catch (err) {
      Promise.reject(err);
    }
  }

  addCita(formData: any) {
    const fechaFormateada = format(formData.fecha, 'yyyy-MM-dd');
    const data :Cita ={
      userId: this.valueService.id,
      consultorioId: formData.especialidad,
      fecha:fechaFormateada,
      hora: formData.hora
    };
    console.log("data: ",data);
    this.citaService.createCita(data).subscribe({
      next: async (res) => {
        console.log(res);
        this.openSnackBar('Cita agendada');
      },
      error: (err) => {
        if (err.error.statusCode === 409) {
          err.error.message;
          this.openSnackBar(err.error.message);
        }
        if (err.error.statusCode === 400) {
          err.error.message;
          this.openSnackBar(err.error.message);
        }
      },
    });
  }

  openSnackBar(Message: string) {
    this.snackBar.open(Message, 'Cerrar', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }
}
