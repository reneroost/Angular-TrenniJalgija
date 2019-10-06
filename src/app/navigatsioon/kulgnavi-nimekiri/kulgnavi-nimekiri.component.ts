import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AutentimineService } from 'src/app/autentimine/autentimine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kulgnavi-nimekiri',
  templateUrl: './kulgnavi-nimekiri.component.html',
  styleUrls: ['./kulgnavi-nimekiri.component.css']
})
export class KulgnaviNimekiriComponent implements OnInit, OnDestroy {
  @Output() sulgeKulgnavi = new EventEmitter<void>();
  onAutenditud = false;
  autentimineSubscription: Subscription;

  constructor(private autentimineService: AutentimineService) { }

  ngOnInit() {
    this.autentimineSubscription = this.autentimineService.sisseLogitud.subscribe(logimiseSeis => {
      this.onAutenditud = logimiseSeis;
    });
  }

  onSulge() {
    this.sulgeKulgnavi.emit();
  }

  onLogivalja() {
    this.onSulge();
    this.autentimineService.logiValja();
  }

  ngOnDestroy() {
    this.autentimineSubscription.unsubscribe();
  }
}
