import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio';
import { OpcionesMedicos } from 'src/app/models/opcionesMedicos';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-editar-consultorio',
  templateUrl: './editar-consultorio.component.html',
  styleUrls: ['./editar-consultorio.component.css'],
})
export class EditarConsultorioComponent implements OnInit {
  validateFrm!: FormGroup;
  public consultorio_id: number = 0;
  consultorio!: Consultorio;
  opcionesMedicos: OpcionesMedicos[] = [];
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private consultorioService: ConsultorioService,
    private medicoService: MedicoService,
    private snackBar: MatSnackBar
  ) {
    this.validateFrm = this.fb.group({
      especialidad: ['', [Validators.required]],
      medico_id: ['', [Validators.required, this.validateSeleccionEspecialidad]],
    });
  }

  async ngOnInit() {
    //primero,con el id, buscaria un consultorio, y prodia en especialidad ese valor
    //luego,saco de ese mismo consultorio,el medico id
    //tendria que hacer un 2do llamado a la api para traer todos los medicos
    this.consultorio_id = this.activatedRoute.snapshot.params['consultorio_id'];
    let promise1 = await this.getConsultorio(this.consultorio_id);
    let promise2 = await this.getMedicosNames();
    Promise.all([promise1, promise2]);
  }

  submitForm() {
    if (this.validateFrm.valid) {
      this.editConsultorio(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  editConsultorio(formData: any) {
    const medicoSeleccionada = this.validateFrm.value.medico_id;
    this.consultorioService.editConsultorio(this.consultorio_id,formData).subscribe(
    {
      next: async (res) => {
        console.log(res);
        this.openSnackBar("Consultorio editado");
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
  async getConsultorio(consultorio_id: number) {
    try {
      let response = await this.consultorioService.getOneById(consultorio_id);
      console.log(response);
      this.consultorio = response;
      const consultorio = {
        id: response.medico.id,
        label: `${response.medico.nombre} ${response.medico.apellido}`,
      };
      this.opcionesMedicos.push(consultorio);
      this.validateFrm = this.fb.group({
        especialidad: [this.consultorio.especialidad, [Validators.required]],
        medico_id: [
          this.consultorio.medico.id,
          [Validators.required, this.validateSeleccionEspecialidad],
        ],
      });
      Promise.resolve();
    } catch (err) {
      Promise.reject(err);
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

  validateSeleccionEspecialidad(control: AbstractControl) {
    if (control.value === null || control.value === '') {
      return { required: true };
    }
    return null;
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
