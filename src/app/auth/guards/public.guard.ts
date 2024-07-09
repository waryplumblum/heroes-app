import { inject, Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard {

  constructor() { }

}

const isAuthenticated = (): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication()
    .pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return router.createUrlTree(['./']);
        }
        return true;
      }),
      catchError(() => of(true)) // Permitir acceso en caso de error
  );
}

export const canActivatePublicGuard:CanActivateFn = isAuthenticated;
export const canMatchPublicGuard   :CanMatchFn    = isAuthenticated;
