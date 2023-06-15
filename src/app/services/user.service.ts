import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private valueService: ValueService) { }

  createUser(){
    let url = `${environment.apiUrl}auth/user`;
  }
}
