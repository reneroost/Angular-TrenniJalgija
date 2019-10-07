import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SisselogimineComponent } from './autentimine/sisselogimine/sisselogimine.component';
import { TeretulemastComponent } from './teretulemast/teretulemast.component';
import { AppMarsruutimineModule } from './app-marsruutimine.module';
import { RegistreerimineComponent } from './autentimine/registreerimine/registreerimine.component';
import { PaisComponent } from './navigatsioon/pais/pais.component';
import { KulgnaviNimekiriComponent } from './navigatsioon/kulgnavi-nimekiri/kulgnavi-nimekiri.component';
import { UusTreeningComponent } from './treening/uus-treening/uus-treening.component';
import { PraeguneTreeningComponent } from './treening/praegune-treening/praegune-treening.component';
import { EelnevadTreeningudComponent } from './treening/eelnevad-treeningud/eelnevad-treeningud.component';
import { TreeningComponent } from './treening/treening.component';
import { PeataTreeningComponent } from './treening/praegune-treening/peata-treening.component';
import { AutentimineService } from './autentimine/autentimine.service';
import { TreeningService } from './treening/treening.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SisselogimineComponent,
    RegistreerimineComponent,
    TeretulemastComponent,
    PaisComponent,
    KulgnaviNimekiriComponent,
    UusTreeningComponent,
    PraeguneTreeningComponent,
    EelnevadTreeningudComponent,
    TreeningComponent,
    PeataTreeningComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppMarsruutimineModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AutentimineService, TreeningService],
  bootstrap: [AppComponent],
  entryComponents: [PeataTreeningComponent]
})
export class AppModule { }
