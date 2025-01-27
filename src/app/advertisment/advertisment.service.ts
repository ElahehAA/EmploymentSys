import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisment } from '../../Models/Advertisment';
import { Statics } from '../../Statics';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

  constructor(private http:HttpClient) { }

  Insert(item:Advertisment){
    return this.http.post(Statics.API+"EmploymentSys/Advertisment",item,{responseType:"json"})
  }

  Update(item:Advertisment){
    return this.http.put(Statics.API+"EmploymentSys/Advertisment",item,{responseType:"json"})
  }

  BindGriddata(){
    return this.http.get<Advertisment[]>(Statics.API+"EmploymentSys/Advertisment",{responseType:"json"})
  }

  FindById(ID:number){
    return this.http.get<Advertisment>(Statics.API+"EmploymentSys/Advertisment/"+ID,{responseType:"json"})
  }

  Delete(ID:number){
    return this.http.delete(Statics.API+"EmploymentSys/Advertisment/"+ID,{responseType:"json"})
  }
}
