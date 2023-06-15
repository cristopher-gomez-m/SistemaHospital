import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MedicoService } from 'src/app/services/medico.service';
import { MedicoDisplay } from 'src/app/models/medico';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {
  validateFrm!: FormGroup;
  public medico_id: number = 0;
  medico!: MedicoDisplay;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { 
    this.validateFrm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      cedula: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
    });
  }

  async ngOnInit(): Promise<void> {
    this.medico_id = this.activatedRoute.snapshot.params['medico_id'];
    let promise1 = await this.getMedico(this.medico_id);

    Promise.all([promise1]);
  }


  submitForm() {
    if (this.validateFrm.valid) {
      this.editMedico(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  crearcuenta() {

  }

 async getMedico(medico_id:number){
    this.medicoService.getMedicoById(medico_id).subscribe(
      {
        next: async (res) => {
          console.log("medico: ",res);
          this.validateFrm = this.fb.group({
            email: [res.email, [Validators.required, Validators.email]],
            password: [res.password, [Validators.required]],
            cedula: [res.cedula, [Validators.required]],
            nombre: [res.nombre, [Validators.required]],
            apellido: [res.apellido, [Validators.required]],
            direccion: [res.direccion, [Validators.required]],
          });
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

  editMedico(data:any){
    this.medicoService.updateMedico(this.medico_id,data).subscribe(
      {
        next: async (res) => {
          this.openSnackBar("Medico editado");
            //Retraso de 2sg para mostrar el mensaje
  await new Promise((resolve) => setTimeout(resolve, 2000));          
          this.router.navigate(['/administrador/listar-medicos']);
        },
        error: (err) => {
          if (err.error.statusCode === 409) {
             err.error.message;
            this.openSnackBar( err.error.message);
          }
        },
      });
  }

  regresar() {
    this.router.navigate(['/administrador/listar-medicos']);
  }
}
