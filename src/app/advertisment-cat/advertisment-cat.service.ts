import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertismentCat } from '../../Models/AdvertismentCat';
import { Statics } from '../../Statics';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentCatService {

  constructor(private http:HttpClient) { }
 
  Insert(item:AdvertismentCat){
    return this.http.post(Statics.API+"EmploymentSys/AdvertismentCat",item,{responseType:"json"});
  }

  Update(item:AdvertismentCat){
    return this.http.put(Statics.API+"EmploymentSys/AdvertismentCat",item,{responseType:"json"});
  }

  BindGridData(){
    return this.http.get<AdvertismentCat[]>(Statics.API+"EmploymentSys/AdvertismentCat",{responseType:"json"});
  }

  // Delete(id:number,token:string){
  //   const headerDict = {
  //     'Authorization': 'Bearer ' + token,
  //   }
  //   const requestOptions = {                                                                                                                                                                                 
  //     headers: new HttpHeaders(headerDict), 
  //   };
  //   return this.http.delete(Statics.API+"EmploymentSys/AdvertismentCat/"+id,requestOptions);
  // }
  
  Delete(id:number){
    return this.http.delete(Statics.API+"EmploymentSys/AdvertismentCat/"+id,{responseType:"json"});
  }
}
