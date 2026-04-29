
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const roles = localStorage.getItem('isAdmin');

  if (!token) {
    router.navigate(['/protutos']);
    return false;
  }

  if (roles !== 'true') {
    router.navigate(['/protutos']);
    return false;
  }

  return true;
};
          