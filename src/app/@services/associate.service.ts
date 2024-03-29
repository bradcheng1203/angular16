import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../@model/Customer';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }
  
  apiurl='http://localhost:3000';
  
  getAssociate(){
    return this.http.get(this.apiurl+'/associate');
  }
  
  getAssociatebycode(code:any){    
    return this.http.get(this.apiurl+'/associate/'+code);
  }
  
  getCountry():Observable<Country[]>{    
    return this.http.get<Country[]>(this.apiurl+'/country');
  }

  saveAssociate(data:any,code:any){    
    return this.http.put(this.apiurl+'/associate/'+code,data);
  }
  
  deleteAssociate(data:any,code:any){    
    return this.http.delete(this.apiurl+'/associate/'+code,data);
  }
}
