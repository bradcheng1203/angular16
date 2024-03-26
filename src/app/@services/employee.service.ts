import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  
  apiurl='http://localhost:3000';  
  
  addEmployee(data: any): Observable<any> {
    return this._http.post(this.apiurl+'/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(this.apiurl+`/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.apiurl+'/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(this.apiurl+`/employees/${id}`);
  }
  
  updateCustomer(id: number, data: any): Observable<any> {
    return this._http.put(this.apiurl+`/customer/${id}`, data);
  }
  
  getCusrtmerById(id: number): Observable<any> {
    return this._http.get(this.apiurl+`/customer/${id}`);
  }
}
