import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../@model/Customer';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }
  
  getAssociate(){
    return this.http.get('http://localhost:3000/associate');
  }
  
  getAssociatebycode(code:any){    
    return this.http.get('http://localhost:3000/associate/'+code);
  }
  
  getCountry():Observable<Country[]>{
    console.log( 'getCountry' );
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  saveAssociate(data:any,code:any){    
    return this.http.put('http://localhost:3000/associate/'+code,data);
  }
  
  deleteAssociate(data:any,code:any){    
    return this.http.delete('http://localhost:3000/associate/'+code,data);
  }  
}
