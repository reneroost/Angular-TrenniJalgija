import { Component, OnInit } from '@angular/core';
import { AutentimineService } from './autentimine/autentimine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trenni-jalgija';

  constructor(private autentimineService: AutentimineService) {}

  ngOnInit() {
    this.autentimineService.initAutentKuular();
  }
}
