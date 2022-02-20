import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})

export class IsConnectedGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (
        this.userService.getRole() === 'ADMIN' || 
        this.userService.getRole() === 'USER'){
          return true;
      }else {
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
