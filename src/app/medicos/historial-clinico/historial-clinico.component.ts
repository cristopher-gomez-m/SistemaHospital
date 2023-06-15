import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PacientesService } from 'src/app/services/pacientes.service';
import { HistorialDisplay } from 'src/app/models/userHistorial';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css'],
})
export class HistorialClinicoComponent implements OnInit {
  enfermedades!: FormGroup;
  private paciente_id: number = 0;
  historial!: HistorialDisplay;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pacienteService: PacientesService,
    private snackBar: MatSnackBar
  ) {
    this.enfermedades = this._formBuilder.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      edad: [null],
      altura: [null],
      peso: [null],
      masa_corporal: [null],
      temperatura: [null],
      frecuencia_respiratoria: [null],
      presion_arterial: [null],
      frecuencia_cardiaca: [null],
      diabetes: [false],
      diabetes_descripcion: [null],
      tiroideas: [false],
      tiroideas_descripcion: [null],
      hipertension: [false],
      hipertension_descripcion: [null],
      cardiopatia: [false],
      cardiopatia_descripcion: [null],
      traumatismo: [false],
      traumatismo_descripcion: [null],
      cancer: [false],
      cancer_descripcion: [null],
      otros: [false],
      otros_descripcion: [null],
    });
  }

  async ngOnInit() {
    this.paciente_id = this.activatedRoute.snapshot.params['paciente_id'];
    let promise1 = this.getDataPaciente();
    Promise.all([promise1]);
  }

  getDataPaciente() {
    this.pacienteService.getHistorial(this.paciente_id).subscribe({
      next: async (res) => {
        console.log(res);
        this.historial=res;
        console.log(this.historial.historial_clinico);
        this.enfermedades.patchValue({
          nombre: this.historial.nombre,
          apellido: this.historial.apellido,
          edad: this.historial.historial_clinico?.edad,
          altura: this.historial.historial_clinico?.altura,
          peso: this.historial.historial_clinico?.peso,
          masa_corporal: this.historial.historial_clinico?.masa_corporal,
          temperatura: this.historial.historial_clinico?.temperatura,
          frecuencia_respiratoria: this.historial.historial_clinico?.frecuencia_respiratoria,
          presion_arterial: this.historial.historial_clinico?.presion_arterial,
          frecuencia_cardiaca: this.historial.historial_clinico?.frecuencia_cardiaca,
          diabetes: this.historial.historial_clinico?.diabetes,
          diabetes_descripcion: this.historial.historial_clinico?.diabetes_descripcion,
          tiroideas: this.historial.historial_clinico?.tiroideas,
          tiroideas_descripcion: this.historial.historial_clinico?.tiroideas_descripcion,
          hipertension: this.historial.historial_clinico?.hipertension,
          hipertension_descripcion: this.historial.historial_clinico?.hipertension_descripcion,
          cardiopatia: this.historial.historial_clinico?.cardiopatia,
          cardiopatia_descripcion: this.historial.historial_clinico?.cardiopatia_descripcion,
          traumatismo: this.historial.historial_clinico?.traumatismo,
          traumatismo_descripcion: this.historial.historial_clinico?.traumatismo_descripcion,
          cancer: this.historial.historial_clinico?.cancer,
          cancer_descripcion: this.historial.historial_clinico?.cancer_descripcion,
          otros: this.historial.historial_clinico?.otros,
          otros_descripcion: this.historial.historial_clinico?.otros_descripcion,
        });
      },
    })
  }
  submitForm() {
    if (this.enfermedades.valid) {
      this.editarHistorial(this.enfermedades.value);
    } else {
      Object.values(this.enfermedades.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  async editarHistorial(formData:any) {
    const nombres ={
      nombre: formData.nombre,
      apellido: formData.apellido
    }
    console.log("nombres: ",nombres);

    const datosRestantes = {
      // Obtener los valores del formulario, excluyendo nombre y apellido
      ...formData,
      nombre: null,
      apellido: null
    };
    try{
      await this.pacienteService.updateNombreYapellido( this.paciente_id,nombres);
    }catch(err){
      this.openSnackBar( 'error');
      console.log(err);
    }
    try {
      const historial_id= this.historial.historial_clinico!.id;
      await this.pacienteService.updateHistorial(historial_id,datosRestantes);
      this.openSnackBar("Historial editado");
      //Retraso de 2sg para mostrar el mensaje
await new Promise((resolve) => setTimeout(resolve, 2000));          
    this.router.navigate(['/medicos']);
    } catch (err:any) {
      // Captura el error y maneja el caso de error aquí
      this.openSnackBar( 'error');
      console.log(err);
    }
    
  }


  openSnackBar(Message:string) {
    this.snackBar.open(Message,'Cerrar',{
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }

  regresar() {
    this.router.navigate(['/medicos']);
  }
}
