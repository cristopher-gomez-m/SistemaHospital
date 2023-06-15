import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  token!: string;
  id!: number;
  private tokenSource = new Subject<string>();
  tokenChallange$ = this.tokenSource.asObservable();

  private idSource = new Subject<number>();
  idChallange$ = this.idSource.asObservable();
  constructor(private ss: SessionService) { 
    if (this.ss.getItem('token') !== '') {
      this.token = this.ss.getItem('token');
      this.tokenSource.next(this.token);
    }
    if (this.ss.getItem('id') !== 0) {
      this.id = this.ss.getItem('id');
      this.idSource.next(this.id);
    }
  }

  public setToken(nombre: string) {
    this.token = nombre;
    this.ss.setItem('token', nombre);
    this.tokenSource.next(nombre);
  }

  public setId(id:number) {
    this.id = id;
    this.ss.setItem('id', id);
    this.idSource.next(id);
  }


  public delToken() {
    this.token = '';
    this.ss.setItem('token', '');
    this.tokenSource.next('');
  }

  public delId() {
    this.id = 0;
    this.ss.setItem('id', '');
    this.tokenSource.next('');
  }
  public CerrarSesion(){
    this.delToken();
    this.delId();
  }
}
