import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeretulemastComponent } from './teretulemast/teretulemast.component';
import { SisselogimineComponent } from './autentimine/sisselogimine/sisselogimine.component';
import { TreenimineComponent } from './treenimine/treenimine.component';
import { RegistreerimineComponent } from './autentimine/registreerimine/registreerimine.component';

const marsruudid: Routes = [
  { path: '', component: TeretulemastComponent },
  { path: 'registreerimine', component: RegistreerimineComponent},
  { path: 'sisselogimine', component: SisselogimineComponent},
  { path: 'treening', component: TreenimineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(marsruudid)],
  exports: [RouterModule]
})
export class AppMarsruutimineModule {}
