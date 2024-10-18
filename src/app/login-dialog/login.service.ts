import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { Statics } from '../../Statics';
import { Login } from '../../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }

  Login(user:User){
    return this.http.post<Login>(Statics.API+"EmploymentSys/Login",user,{responseType:"json"})
  }
}
