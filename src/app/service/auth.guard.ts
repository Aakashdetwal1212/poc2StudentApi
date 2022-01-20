import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../component/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService:LoginService, private router : Router) {

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("auth.guard.ts called")  
    if(this.loginService.isLoggedIn()){
      console.log("login true ::  auth.guard.ts")
      return true;
    }
      this.router.navigate(['login'])
      console.log("login false:: auth.guard.ts");
      return false;
  }
  
}
