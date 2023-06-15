import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit{
  validateFrm!: FormGroup;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.validateFrm= this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      cedula: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
    });
  }
  

  submitForm(){
    if (this.validateFrm.valid) {
      this.crearcuenta(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  crearcuenta(formData: any) {
    this.medicoService.createMedico(formData).subscribe(
      {
        next: async (res) => {
          console.log(res);
          this.openSnackBar("cuenta creada");
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

  openSnackBar(Message:string) {
    this.snackBar.open(Message,'Cerrar',{
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }

  regresar() {
    this.router.navigate(['/administrador/listar-medicos']);
  }
}
