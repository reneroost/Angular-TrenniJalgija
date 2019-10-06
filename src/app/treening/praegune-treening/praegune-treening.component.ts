import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PeataTreeningComponent } from './peata-treening.component';
import { TreeningService } from '../treening.service';

@Component({
  selector: 'app-praegune-treening',
  templateUrl: './praegune-treening.component.html',
  styleUrls: ['./praegune-treening.component.css']
})
export class PraeguneTreeningComponent implements OnInit {
  progress = 0;
  taimer: number;

  constructor(private dialoog: MatDialog, private treeningService: TreeningService) { }

  ngOnInit() {
    this.kaitaTaimerit();
  }

  kaitaTaimerit() {
    const samm = this.treeningService.saaKaimasolevHarjutus().kestus / 100 * 1000;
    this.taimer = window.setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.treeningService.lopetaHarjutus();
        clearInterval(this.taimer);
      }
    }, samm);
  }

  onPeatu() {
    clearInterval(this.taimer);
    const dialoogViit = this.dialoog.open(PeataTreeningComponent, {
      data: {
        progress: this.progress
      }
    });

    dialoogViit.afterClosed().subscribe(vastus => {
      if (vastus) {
        this.treeningService.tyhistaHarjutus(this.progress);
      } else {
        this.kaitaTaimerit();
      }
    });
  }
}
