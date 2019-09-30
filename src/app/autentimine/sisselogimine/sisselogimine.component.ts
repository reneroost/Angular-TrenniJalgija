import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sisselogimine',
  templateUrl: './sisselogimine.component.html',
  styleUrls: ['./sisselogimine.component.css']
})
export class SisselogimineComponent implements OnInit {
  logimiseVorm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logimiseVorm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      parool: new FormControl('', {validators: [Validators.required]})
    });
  }

  onEsitatud() {
    console.log(this.logimiseVorm);
  }

}
