import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../@services/auth.service';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  constructor(private service: AuthService, private router: Router,private toastr:ToastrService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.service.isloggedin()) {      
      this.toastr.success('Login successfully.','',{timeOut: 2000});
      return true;
    }else{
      this.router.navigate(['login']);
      this.toastr.warning('You dont have access.');
      return false;
    }    
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
