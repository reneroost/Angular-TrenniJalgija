import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutentimineService } from '../autentimine.service';

@Component({
  selector: 'app-sisselogimine',
  templateUrl: './sisselogimine.component.html',
  styleUrls: ['./sisselogimine.component.css']
})
export class SisselogimineComponent implements OnInit {
  logimiseVorm: FormGroup;

  constructor(private autentimineService: AutentimineService) { }

  ngOnInit() {
    this.logimiseVorm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      parool: new FormControl('', {validators: [Validators.required]})
    });
  }

  onEsitatud() {
    this.autentimineService.logiSisse({
      email: this.logimiseVorm.value.email,
      parool: this.logimiseVorm.value.parool
    });
  }

}
