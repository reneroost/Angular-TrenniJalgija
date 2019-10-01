import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-uus-treening',
  templateUrl: './uus-treening.component.html',
  styleUrls: ['./uus-treening.component.css']
})
export class UusTreeningComponent implements OnInit {
  @Output() treeningAlusta = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onAlustaTreeningut() {
    this.treeningAlusta.emit();
  }

}
