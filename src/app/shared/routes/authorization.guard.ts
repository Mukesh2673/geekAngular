import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, ActivatedRoute,Router,CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService  } from '../../services/authorization.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    //debugger;
    console.log('hiiii');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);
    if (!isAuthorized) {
      this.router.navigate(['']);
    }
  
    return isAuthorized;
  }
  canActivateChild(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.authorizationService.isAuthorized(allowedRoles);
    console.log('asfdjlsdf0');

    if (!isAuthorized) {
      // if not authorized, show access denied message
      this.router.navigate([]);
    }

    return isAuthorized;
  }
  
}
