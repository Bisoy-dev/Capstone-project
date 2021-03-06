import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './services/account.service';

@Injectable({
  providedIn: 'root'
})
export class StoreAdminAccessGuard implements CanActivate {
  constructor(private accountService: AccountService, private route: Router){}
  canActivate(){
    if(this.accountService.isLoggedIn()){
      if(this.accountService.getUserRole() == "StoreAdmin"){
        return true;
      }else{
        this.route.navigate(['/branch','orders'])
        return false;
      }
    }else{ 
      this.route.navigate(['/login'])
      return false;
    }
  }
  
}
