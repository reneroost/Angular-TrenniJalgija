import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AutentimineService } from 'src/app/autentimine/autentimine.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit, OnDestroy {
  @Output() kulgnaviLuliti = new EventEmitter<void>();
  onAutentitud = false;
  autentimineSubscription: Subscription;

  constructor(private autentimineService: AutentimineService) { }

  ngOnInit() {
    this.autentimineSubscription = this.autentimineService.sisseLogitud.subscribe(logimiseSeis => {
      this.onAutentitud = logimiseSeis;
    });
  }

  onLulitiKulgnavi() {
    this.kulgnaviLuliti.emit();
  }

  onLogivalja() {
    this.autentimineService.logiValja();
  }

  ngOnDestroy() {
    this.autentimineSubscription.unsubscribe();
  }

}
