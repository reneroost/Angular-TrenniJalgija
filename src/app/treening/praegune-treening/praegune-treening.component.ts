import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PeataTreeningComponent } from './peata-treening.component';

@Component({
  selector: 'app-praegune-treening',
  templateUrl: './praegune-treening.component.html',
  styleUrls: ['./praegune-treening.component.css']
})
export class PraeguneTreeningComponent implements OnInit {
  @Output() treeninguLopp = new EventEmitter();
  progress = 0;
  taimer: number;

  constructor(private dialoog: MatDialog) { }

  ngOnInit() {
    this.kaitaTaimerit();
  }

  kaitaTaimerit() {
    this.taimer = window.setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.taimer);
      }
    }, 200);
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
        this.treeninguLopp.emit();
      } else {
        this.kaitaTaimerit();
      }
    });
  }
}
