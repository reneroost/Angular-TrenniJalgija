import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { Kasutaja } from './kasutaja.model';
import { AutentimineAndmed } from './autentimine-andmed.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AutentimineService {
  sisseLogitud = new Subject<boolean>(); // authChange
  private kasutaja: Kasutaja;

  constructor(private ruuter: Router) {}

  registreeriKasutaja(audentimineAndmed: AutentimineAndmed) {
    this.kasutaja = {
      email: audentimineAndmed.email,
      kasutajaId: Math.round(Math.random() * 10000).toString()
    };
    this.autentimineEdukas();
  }

  logiSisse(audentimineAndmed: AutentimineAndmed) {
    this.kasutaja = {
      email: audentimineAndmed.email,
      kasutajaId: Math.round(Math.random() * 10000).toString()
    };
    this.autentimineEdukas();
  }

  logiValja() {
    this.kasutaja = null;
    this.sisseLogitud.next(false);
    this.ruuter.navigate(['/sisselogimine']);
  }

  saaKasutaja() {
    return { ...this.kasutaja };
  }

  onAutenditud() {
    return this.kasutaja != null;
  }

  private autentimineEdukas() {
    this.sisseLogitud.next(true);
    this.ruuter.navigate(['/treening']);
  }

}
