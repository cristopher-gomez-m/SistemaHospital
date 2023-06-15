import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { lastValueFrom } from 'rxjs';
import { MedicoDisplay } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  public getAllNames(){
    let url = `${environment.apiUrl}consultorios/medicos/nombres`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.get<any>(url, options));
  }

  public getAll(){
    let url = `${environment.apiUrl}medicos`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }

  public createMedico(data:any){
    let url = `${environment.apiUrl}medicos`;
    data.rol=2;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,data,options);
  }

  public getMedicoById(id:number){
    let url = `${environment.apiUrl}medicos/${id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return  this.http.get<any>(url,options);
  }

  public updateMedico(id:number,data:MedicoDisplay){
    let url = `${environment.apiUrl}medicos/${id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return  this.http.put<any>(url,data,options);
  }


  public deleteMedico(id:number){
    let url = `${environment.apiUrl}medicos/${id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return  this.http.delete<any>(url,options);
  }
}
