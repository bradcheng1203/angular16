import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }  
  apiurl='http://localhost:3000';  
  
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'/user',inputdata)
  }
  
  getUserbyCode(id:any){
    return this.http.get(this.apiurl+'/user/'+id);
  }
  
  Getall(){
    return this.http.get(this.apiurl+'/user');
  }
  
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/user/'+id,inputdata);
  }
  
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  
  getuserrole(){
    return this.http.get(this.apiurl+'/role');
  }
  
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  
  getaccessbyrole(role:any,menu:any){
    return this.http.get( this.apiurl + '/roleaccess?role='+role+'&menu='+ menu );
  }
}
