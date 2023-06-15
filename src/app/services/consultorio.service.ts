import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Consultorio } from '../models/consultorio';

@Injectable({
  providedIn: 'root',
})
export class ConsultorioService {
  constructor(private http: HttpClient) {}

  public getAll() {
    let url = `${environment.apiUrl}consultorios`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }

  public getConsultorios() {
    let url = `${environment.apiUrl}consultorios`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.get<any>(url, options));
  }


  public getOneById(consultorio_id:number):Promise<Consultorio> {
    let url = `${environment.apiUrl}consultorios/${consultorio_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.get<any>(url, options));
  }

  public editConsultorio(consultorio_id:number,data:any){
    let url = `${environment.apiUrl}consultorios/${consultorio_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.put<any>(url,data,options);
  }

  public createConsultorio(data:any){
    let url = `${environment.apiUrl}consultorios`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,data,options);
  }
  
  public deleteConsultorio(consultorio_id:number){
    let url = `${environment.apiUrl}consultorios/${consultorio_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.delete<any>(url,options);
  }
}
