import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { Kasutaja } from './kasutaja.model';
import { AutentimineAndmed } from './autentimine-andmed.model';
import { Injectable } from '@angular/core';
import { TreeningService } from '../treening/treening.service';

@Injectable()
export class AutentimineService {
  sisseLogitud = new Subject<boolean>(); // authChange
  private onAutentifitseeritud = false;

  constructor(private ruuter: Router,
              private autent: AngularFireAuth,
              private treeningService: TreeningService) {}


  initAutentKuular() {
    this.autent.authState.subscribe(kasutaja => {
      if (kasutaja) {
        this.onAutentifitseeritud = true;
        this.sisseLogitud.next(true);
        this.ruuter.navigate(['/treening']);
      } else {
        this.treeningService.tyhistaSubscriptionid();
        this.sisseLogitud.next(false);
        this.ruuter.navigate(['/sisselogimine']);
        this.onAutentifitseeritud = false;
      }
    });
  }

  registreeriKasutaja(autentimineAndmed: AutentimineAndmed) {
    this.autent.auth
      .createUserWithEmailAndPassword(autentimineAndmed.email, autentimineAndmed.parool)
      .then(vastus => {
        console.log(vastus);
      }).catch(viga => {
        console.log(viga);
      });
  }

  logiSisse(audentimineAndmed: AutentimineAndmed) {
    this.autent.auth.signInWithEmailAndPassword(audentimineAndmed.email, audentimineAndmed.parool)
    .then(vastus => {
      console.log(vastus);
    }).catch(viga => {
      console.log(viga);
    });
  }

  logiValja() {
    this.autent.auth.signOut();
    this.treeningService.tyhistaSubscriptionid();
    this.sisseLogitud.next(false);
    this.ruuter.navigate(['/sisselogimine']);
    this.onAutentifitseeritud = false;
  }

  onAutenditud() {
    return this.onAutentifitseeritud;
  }

}
