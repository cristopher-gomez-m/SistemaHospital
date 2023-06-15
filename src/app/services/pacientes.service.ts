import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { lastValueFrom } from 'rxjs';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  public getAll() {
    let url = `${environment.apiUrl}user/pacientes`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  } 

  public getHistorial(paciente_id:number){
    let url = `${environment.apiUrl}user/historial/${paciente_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return  this.http.get<any>(url, options);
  }

  public updateHistorial(historial_id:number,data:Historial){
    let url = `${environment.apiUrl}historial-clinico/${historial_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.put<any>(url,data, options));
  }

  public updateNombreYapellido(paciente_id:number,data:any){
    let url = `${environment.apiUrl}user/${paciente_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return lastValueFrom(this.http.put<any>(url,data, options));
  }

  public deletePaciente(paciente_id:number){
    let url = `${environment.apiUrl}user/${paciente_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.delete<any>(url, options);
  }
}
