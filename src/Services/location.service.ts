import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../Models/City';
import { Statics } from '../Statics';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  BindCities(){
    return this.http.get<City[]>(Statics.API+"EmploymentSys/Locations",{responseType:"json"})
  }
}
