import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  validateFrm!: FormGroup;
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.validateFrm= this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      repeat_password: [null, [Validators.required,this.passwordMatchValidator.bind(this)]],
      cedula: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
    });
  }
  passwordMatchValidator(control: AbstractControl) {
    const password = control.parent?.get('password');
    const repeatPassword = control.parent?.get('repeat_password');
    console.log('primero: ',password?.value);
    console.log("segundo: ",repeatPassword?.value);

    if (password?.value !== repeatPassword?.value) {
       control.get('repeat_password')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } 
      return null;
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
    this.authService.register(formData).subscribe(
      {
        next: async (res) => {
          console.log(res);
          this.openSnackBar("cuenta creada");
            //Retraso de 2sg para mostrar el mensaje
  await new Promise((resolve) => setTimeout(resolve, 2000));          
          this.router.navigate(['/login']);
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
    this.router.navigate(['/login']);
  }
}
