import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutentimineService } from '../autentimine.service';

@Component({
  selector: 'app-registreerimine',
  templateUrl: './registreerimine.component.html',
  styleUrls: ['./registreerimine.component.css']
})
export class RegistreerimineComponent implements OnInit {
  maksimumKuupaev;

  constructor(private autentimineService: AutentimineService) { }

  ngOnInit() {
    this.maksimumKuupaev = new Date();
    this.maksimumKuupaev.setFullYear(this.maksimumKuupaev.getFullYear() - 18);
  }

  onEsitatud(vorm: NgForm) {
    this.autentimineService.registreeriKasutaja({
      email: vorm.value.email,
      parool: vorm.value.parool
    });
  }

}
