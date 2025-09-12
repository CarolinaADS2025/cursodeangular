import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticaoGuard: CanActivateFn = (route, state) => {
  //Router
  const router = inject(Router);

  //Acesso
  const acesso = false;

  //condicional de acesso
  if (acesso) {
    return true;
  } else {
    router.navigate(['/inicio/falhaAcesso']);
    return false;
  }
};
