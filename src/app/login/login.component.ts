import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {      
      if(sessionStorage.getItem('username')!=null){
        this.toastr.warning('Logout successfully.');
      }
      sessionStorage.clear();  
  }
  errors: any;
  result: any;
  
  loginform = this.builder.group({
    id: this.builder.control('admin', Validators.required),
    password: this.builder.control('Test@1234', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.getUserbyCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
          if (this.result.isactive) {            
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['menu']);
            //this.toastr.success('Log In successfully.');
            this.toastr.success('Login successfully.','',{timeOut: 2000});
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      },
      error => {
        this.errors = error;
        //console.log(this.errors);
        this.toastr.error('Invalid credentials');
      })  ;
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }  
}
