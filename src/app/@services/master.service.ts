import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../@model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  
  GetAssociate(){
    return this.http.get('http://localhost:3000/associate');
  }
  GetAssociatebycode(code:any){
    return this.http.get('http://localhost:3000/associate/'+code);
  }
  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('http://localhost:3000/associate/'+code,data);
  }
}
