import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../Models/User';
import { Statics } from '../../../Statics';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  Register(user:User){
    return this.http.post<User>(Statics.API+"EmploymentSys/Register",user,{responseType:"json"})
  }
}
