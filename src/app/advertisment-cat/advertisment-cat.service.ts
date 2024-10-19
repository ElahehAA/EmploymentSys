import { HttpClient } from '@angular/common/http';
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

  Delete(id:number){
    return this.http.delete(Statics.API+"EmploymentSys/AdvertismentCat/"+id,{responseType:"json"});
  }
}
