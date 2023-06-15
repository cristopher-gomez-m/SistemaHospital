import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OpcionesMedicos } from 'src/app/models/opcionesMedicos';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-agregar-consultorio',
  templateUrl: './agregar-consultorio.component.html',
  styleUrls: ['./agregar-consultorio.component.css'],
})
export class AgregarConsultorioComponent implements OnInit {
  validateFrm!: FormGroup;
  opcionesMedicos: OpcionesMedicos[] = [];
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private consultorioService: ConsultorioService,
    private snackBar: MatSnackBar
  ) {
    this.validateFrm = this.fb.group({
      especialidad: ['', [Validators.required]],
      medico_id: [
        '',
        [Validators.required, this.validateSeleccionEspecialidad],
      ],
    });
  }
  async ngOnInit() {
    let promise1 = await this.getMedicosNames();
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
      this.addConsultorio(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  async getMedicosNames() {
    try {
      let response = await this.medicoService.getAllNames();
      const opcionesMedicos: OpcionesMedicos[] = [];
      response.forEach(
        (usuario: { id: number; nombre: string; apellido: string }) => {
          const opcionMedico = {
            id: usuario.id,
            label: `${usuario.nombre} ${usuario.apellido}`,
          };
          Array.prototype.push.apply(opcionesMedicos, [opcionMedico]);
        }
      );
      console.log(opcionesMedicos);
      this.opcionesMedicos.push(...opcionesMedicos);
      Promise.resolve();
    } catch (err) {
      Promise.reject(err);
    }
  }

  addConsultorio(formData: any) {
    this.consultorioService.createConsultorio(formData).subscribe(
    {
      next: async (res) => {
        console.log(res);
        this.openSnackBar("Consultorio creado");
          //Retraso de 2sg para mostrar el mensaje
await new Promise((resolve) => setTimeout(resolve, 2000));          
        this.router.navigate(['/administrador']);
      },
      error: (err) => {
        if (err.error.statusCode === 409) {
           err.error.message;
          this.openSnackBar( err.error.message);
        }
      },
    });
  }
  openSnackBar(Message:string) {
    this.snackBar.open(Message,'Cerrar',{
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }

  regresar() {
    this.router.navigate(['/administrador']);
  }
}
