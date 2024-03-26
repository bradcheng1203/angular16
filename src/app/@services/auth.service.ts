import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }  
  apiurl='http://localhost:3000';
  
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'/user',inputdata).pipe(
      catchError(this.handleError)
    );
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
  
  private handleError(error: HttpErrorResponse) {    
    let errorMessage = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.      
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errorMessage = `Backend returned code ${error.status}, body was: ` + error.error.split('\n', 1)[0];      
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
    //return throwError(() => new Error(errorMessage));
  }
}
