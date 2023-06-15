import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValueService } from 'src/app/services/value.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    public valueService: ValueService
  ) {}
  onLogout() {
    this.valueService.CerrarSesion();
    this.router.navigate(['/login']);
  }
}
