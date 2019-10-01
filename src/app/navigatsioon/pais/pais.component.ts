import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  @Output() kulgnaviLuliti = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onLulitiKulgnavi() {
    this.kulgnaviLuliti.emit();
  }

}
