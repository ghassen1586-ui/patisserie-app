import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../Service/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(Auth);
  const router = inject(Router);

  if(!auth.isUserAuthenticated()){
    router.navigateByUrl('/login');
    return false;
  }


  return true;
};
