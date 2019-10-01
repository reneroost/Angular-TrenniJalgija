import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kulgnavi-nimekiri',
  templateUrl: './kulgnavi-nimekiri.component.html',
  styleUrls: ['./kulgnavi-nimekiri.component.css']
})
export class KulgnaviNimekiriComponent implements OnInit {
  @Output() sulgeKulgnavi = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSulge() {
    this.sulgeKulgnavi.emit();
  }

}
