import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeretulemastComponent } from './teretulemast/teretulemast.component';
import { SisselogimineComponent } from './autentimine/sisselogimine/sisselogimine.component';
import { TreeningComponent } from './treening/treening.component';
import { RegistreerimineComponent } from './autentimine/registreerimine/registreerimine.component';
import { AutentimineKaitse } from './autentimine/autentimine.kaitse';

const marsruudid: Routes = [
  { path: '', component: TeretulemastComponent },
  { path: 'registreerimine', component: RegistreerimineComponent},
  { path: 'sisselogimine', component: SisselogimineComponent},
  { path: 'treening', component: TreeningComponent, canActivate: [AutentimineKaitse]}
];

@NgModule({
  imports: [RouterModule.forRoot(marsruudid)],
  exports: [RouterModule],
  providers: [AutentimineKaitse]
})
export class AppMarsruutimineModule {}
