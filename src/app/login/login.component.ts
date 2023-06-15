import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValueService } from '../services/value.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateFrm!: FormGroup;
  userErrorMessage: string='';
  passwordErrorMessage: string='';
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private valueService: ValueService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //this.valueService.CerrarSesion();
    this.validateFrm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.validateFrm.valid) {
      this.ingresar(this.validateFrm.value);
    } else {
      Object.values(this.validateFrm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ingresar(formData: any) {
    this.authService.login(formData).subscribe({
      next: async (res) => {
        this.valueService.setToken(res.token);
        this.valueService.token = res.token;
        this.valueService.setId(res.user.id);
        this.valueService.id=res.user.id;
        if(res.user.rol.id ===1){
          this.router.navigate(['/pacientes']);
        }
        if(res.user.rol.id ===2){
          this.router.navigate(['/medicos']);
        }
        if(res.user.rol.id ===3){
          this.router.navigate(['/administrador']);
        }
      },
      error: (err) => {
        if (err.error.statusCode === 404) {
          this.userErrorMessage = err.error.message;
          this.openSnackBar(this.userErrorMessage);
        }
        if (err.error.statusCode == 409) {
          this.passwordErrorMessage = err.error.message;
          this.openSnackBar(this.passwordErrorMessage);
        }
      },
    });
  }
  openSnackBar(errorMessage:string) {
    this.snackBar.open(errorMessage,'Cerrar',{
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }
  registrar() {
    this.router.navigate(['/register']);
  }
}
