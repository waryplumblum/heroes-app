import { inject, Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor() { }

}

const isAuthenticated = (): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
    take(1),
    tap((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        return router.createUrlTree(['./auth/login']);
      }
      return true;
    }),
    catchError(() => of(router.createUrlTree(['./auth/login'])))
  );
}

export const canActivateGuard:CanActivateFn = isAuthenticated;
export const canMatchGuard   :CanMatchFn    = isAuthenticated;
