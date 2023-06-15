import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { UserCreation } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(paramsData:any): Observable<any>{
    let url = `${environment.apiUrl}auth/login`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,paramsData,options);
  }

  register(user:UserCreation){
    let url = `${environment.apiUrl}auth/register`;
    user.rol=1;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http.post<any>(url,user,options);
  }
}
