import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AutentimineService } from './autentimine.service';

@Injectable()
export class AutentimineKaitse implements CanActivate {
  constructor(private autentimineService: AutentimineService, private ruuter: Router) {

  }

  canActivate(marsruut: ActivatedRouteSnapshot, olek: RouterStateSnapshot) {
    if (this.autentimineService.onAutenditud()) {
      return true;
    } else {
      this.ruuter.navigate(['/login']);
    }
  }

}
