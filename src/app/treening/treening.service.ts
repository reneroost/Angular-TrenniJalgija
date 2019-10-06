import { Subject } from 'rxjs/Subject';
import { Harjutus } from './harjutus.model';

export class TreeningService {
  harjutusMuudetud = new Subject<Harjutus>();
  private saadaolevadHarjutused: Harjutus[] = [
    { id: 'istesse-tousud', nimi: 'Istesse tõusud', kestus: 30, kalorid: 8 },
    { id: 'katekoverdused', nimi: 'Kätekõverdused', kestus: 180, kalorid: 15 },
    { id: 'kukid', nimi: 'Kükid', kestus: 120, kalorid: 18 },
    { id: 'selja-tosted', nimi: 'Selja tõsted', kestus: 60, kalorid: 8 }
  ];
  private kaimasolevHarjutus: Harjutus;
  private sooritatudHarjutused: Harjutus[] = [];

  saaSaadaolevadHarjutused() {
    return this.saadaolevadHarjutused.slice();
  }

  alustaHarjutust(valitudId: string) {
    this.kaimasolevHarjutus = this.saadaolevadHarjutused.find(
      harjutus => harjutus.id === valitudId
      );
    this.harjutusMuudetud.next({ ...this.kaimasolevHarjutus });
  }

  lopetaHarjutus() {
    this.sooritatudHarjutused.push({
      ...this.kaimasolevHarjutus,
      kuupaev: new Date(),
      olek: 'lopetatud'});
    this.kaimasolevHarjutus = null;
    this.harjutusMuudetud.next(null);
  }

  tyhistaHarjutus(progress: number) {
    this.sooritatudHarjutused.push({
      ...this.kaimasolevHarjutus,
      kestus: this.kaimasolevHarjutus.kestus * (progress / 100),
      kalorid: this.kaimasolevHarjutus.kalorid * (progress / 100),
      kuupaev: new Date(),
      olek: 'tyhistatud'});
    this.kaimasolevHarjutus = null;
    this.harjutusMuudetud.next(null);
  }

  saaKaimasolevHarjutus() {
    return { ...this.kaimasolevHarjutus };
  }

  saaLopetatudVoiTyhistatudHarjutused() {
    return this.sooritatudHarjutused.slice();
  }
}
