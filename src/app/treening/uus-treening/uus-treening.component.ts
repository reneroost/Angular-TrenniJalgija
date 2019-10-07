import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { TreeningService } from '../treening.service';
import { Harjutus } from '../harjutus.model';

@Component({
  selector: 'app-uus-treening',
  templateUrl: './uus-treening.component.html',
  styleUrls: ['./uus-treening.component.css']
})
export class UusTreeningComponent implements OnInit, OnDestroy {
  harjutused: Harjutus[];
  harjutusSubscription: Subscription;

  constructor(private treeningService: TreeningService) { }

  ngOnInit() {
    this.harjutusSubscription = this.treeningService.harjutusedMuudetud.subscribe(
      harjutused => this.harjutused = harjutused
      );
    this.treeningService.tombaSaadaolevadHarjutused();
  }

  onAlustaTreeningut(vorm: NgForm) {
    this.treeningService.alustaHarjutust(vorm.value.harjutus);
  }

  ngOnDestroy() {
    this.harjutusSubscription.unsubscribe();
  }

}
