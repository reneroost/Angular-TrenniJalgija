import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TreeningService } from './treening.service';

@Component({
  selector: 'app-treening',
  templateUrl: './treening.component.html',
  styleUrls: ['./treening.component.css']
})
export class TreeningComponent implements OnInit {
  treeningKaib = false;
  harjutusSubscription: Subscription;

  constructor(private treeningService: TreeningService) { }

  ngOnInit() {
    this.harjutusSubscription = this.treeningService.harjutusMuudetud.subscribe(
      harjutus => {
        if (harjutus) {
          this.treeningKaib = true;
        } else {
          this.treeningKaib = false;
        }
      });
  }
}
