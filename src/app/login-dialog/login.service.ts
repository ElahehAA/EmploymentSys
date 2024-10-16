import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { Statics } from '../../Statics';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }

  Login(user:User){
    return this.http.post<string>("https://localhost:7022/"+"EmploymentSys/Login",user,{responseType:"json"})
  }
}
