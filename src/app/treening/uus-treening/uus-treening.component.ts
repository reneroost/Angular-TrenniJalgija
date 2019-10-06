import { Component, OnInit } from '@angular/core';
import { TreeningService } from '../treening.service';
import { Harjutus } from '../harjutus.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uus-treening',
  templateUrl: './uus-treening.component.html',
  styleUrls: ['./uus-treening.component.css']
})
export class UusTreeningComponent implements OnInit {
  harjutused: Harjutus[] = [];

  constructor(private treeningService: TreeningService) { }

  ngOnInit() {
    this.harjutused = this.treeningService.saaSaadaolevadHarjutused();
  }

  onAlustaTreeningut(vorm: NgForm) {
    this.treeningService.alustaHarjutust(vorm.value.harjutus);
  }

}
