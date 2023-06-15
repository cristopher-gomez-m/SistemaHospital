import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  public getAllById(user_id:number){
    let url = `${environment.apiUrl}cita/${user_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }

  public getLastById(user_id:number){
    let url = `${environment.apiUrl}cita/last/${user_id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.get<any>(url, options);
  }


  public createCita(data:any){
    let url = `${environment.apiUrl}cita`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,data,options);
  }
}
