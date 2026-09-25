import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { fetchAuthSession } from 'aws-amplify/auth';
import { from, map, catchError, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  return from(fetchAuthSession()).pipe(
    map(session => session.tokens?.accessToken ? true : router.createUrlTree(['/'])),
    catchError(() => of(router.createUrlTree(['/'])))
  );
};
