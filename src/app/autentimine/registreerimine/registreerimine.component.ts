import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registreerimine',
  templateUrl: './registreerimine.component.html',
  styleUrls: ['./registreerimine.component.css']
})
export class RegistreerimineComponent implements OnInit {
  maksimumKuupaev;

  constructor() { }

  ngOnInit() {
    this.maksimumKuupaev = new Date();
    this.maksimumKuupaev.setFullYear(this.maksimumKuupaev.getFullYear() - 18);
  }

  onEsitatud(vorm: NgForm) {
    console.log(vorm);
  }

}
