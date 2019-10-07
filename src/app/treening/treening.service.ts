import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Harjutus } from './harjutus.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TreeningService {
  harjutusMuudetud = new Subject<Harjutus>();
  harjutusedMuudetud = new Subject<Harjutus[]>();
  sooritatudHarjutusedMuudetud = new Subject<Harjutus[]>();
  private saadaolevadHarjutused: Harjutus[] = [];
  private kaimasolevHarjutus: Harjutus;
  private firebaseSubs: Subscription[] = [];

  constructor(private andmebaas: AngularFirestore) {}

  tombaSaadaolevadHarjutused() {
    this.firebaseSubs.push(this.andmebaas
      .collection('saadaolevadHarjutused')
      .snapshotChanges()
      .pipe(map(dokMassiiv => {
         return dokMassiiv.map(dok => {
          return {
            id: dok.payload.doc.id,
            nimi: dok.payload.doc.data()['nimi'],
            kestus: dok.payload.doc.data()['kestus'],
            kalorid: dok.payload.doc.data()['kalorid']
          };
        });
      }))
      .subscribe((harjutused: Harjutus[]) => {
        this.saadaolevadHarjutused = harjutused;
        this.harjutusedMuudetud.next([...this.saadaolevadHarjutused]);
      }));
  }

  alustaHarjutust(valitudId: string) {
    // this.andmebaas.doc('saadaolevadHarjutused/' + valitudId).update({viimatiValitud: new Date()});
    this.kaimasolevHarjutus = this.saadaolevadHarjutused.find(
      harjutus => harjutus.id === valitudId
      );
    this.harjutusMuudetud.next({ ...this.kaimasolevHarjutus });
  }

  lopetaHarjutus() {
    this.lisaAndmedAndmebaasi({
      ...this.kaimasolevHarjutus,
      kuupaev: new Date(),
      olek: 'lõpetatud'});
    this.kaimasolevHarjutus = null;
    this.harjutusMuudetud.next(null);
  }

  tyhistaHarjutus(progress: number) {
    this.lisaAndmedAndmebaasi({
      ...this.kaimasolevHarjutus,
      kestus: this.kaimasolevHarjutus.kestus * (progress / 100),
      kalorid: this.kaimasolevHarjutus.kalorid * (progress / 100),
      kuupaev: new Date(),
      olek: 'tühistatud'});
    this.kaimasolevHarjutus = null;
    this.harjutusMuudetud.next(null);
  }

  saaKaimasolevHarjutus() {
    return { ...this.kaimasolevHarjutus };
  }

  tombaLopetatudVoiTyhistatudHarjutused() {
    this.firebaseSubs.push(this.andmebaas
      .collection('sooritatudHarjutused')
      .valueChanges()
      .subscribe((harjutused: Harjutus[]) => {
        this.sooritatudHarjutusedMuudetud.next(harjutused);
      }));
  }

  tyhistaSubscriptionid() {
    this.firebaseSubs.forEach(sub => sub.unsubscribe());
  }

  lisaAndmedAndmebaasi(harjutus: Harjutus) {
    this.andmebaas.collection('sooritatudHarjutused').add(harjutus);
  }
}
