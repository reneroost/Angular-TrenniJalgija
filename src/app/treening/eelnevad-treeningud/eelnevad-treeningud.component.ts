import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { Harjutus } from '../harjutus.model';
import { TreeningService } from '../treening.service';

@Component({
  selector: 'app-eelnevad-treeningud',
  templateUrl: './eelnevad-treeningud.component.html',
  styleUrls: ['./eelnevad-treeningud.component.css']
})
export class EelnevadTreeningudComponent implements OnInit, AfterViewInit, OnDestroy {
  kuvatudTulbad = ['kuupaev', 'nimi', 'kestus', 'kalorid', 'olek'];
  andmeteAllikas = new MatTableDataSource<Harjutus>();
  private harjutusedMuudetudSubscription: Subscription;

  @ViewChild(MatSort, {static: false}) sorteeri: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private treeningService: TreeningService) { }

  ngOnInit() {
    this.harjutusedMuudetudSubscription = this.treeningService.sooritatudHarjutusedMuudetud.subscribe(
      (harjutused: Harjutus[]) => {
        this.andmeteAllikas.data = harjutused;
      });
    this.treeningService.tombaLopetatudVoiTyhistatudHarjutused();
  }

  ngAfterViewInit() {
    this.andmeteAllikas.sort = this.sorteeri;
    this.andmeteAllikas.paginator = this.paginator;
  }

  filtreeri(filtriVaartus: string) {
    this.andmeteAllikas.filter = filtriVaartus.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.harjutusedMuudetudSubscription.unsubscribe()
  }
}
