import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //const token = localStorage.getItem('token');
  const token = sessionStorage.getItem('username');
  console.log(route);
  console.log(state);
  const router = inject(Router);
  console.log('Im in auth guard');
  console.log('token', token);
  if(token) {
    //this.toastr.success('Log In successfully.');
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};


/* export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isloggedin();
}; */

/* export const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => canActivate(route, state); */

