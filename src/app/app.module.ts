import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SisselogimineComponent } from './autentimine/sisselogimine/sisselogimine.component';
import { TreenimineComponent } from './treenimine/treenimine.component';
import { PraeguneTrennComponent } from './treenimine/praegune-trenn/praegune-trenn.component';
import { UusTrennComponent } from './treenimine/uus-trenn/uus-trenn.component';
import { EelnevadTrennidComponent } from './treenimine/eelnevad-trennid/eelnevad-trennid.component';
import { TeretulemastComponent } from './teretulemast/teretulemast.component';
import { AppMarsruutimineModule } from './app-marsruutimine.module';
import { RegistreerimineComponent } from './autentimine/registreerimine/registreerimine.component';
import { PaisComponent } from './navigatsioon/pais/pais.component';
import { KulgnaviNimekiriComponent } from './navigatsioon/kulgnavi-nimekiri/kulgnavi-nimekiri.component';

@NgModule({
  declarations: [
    AppComponent,
    SisselogimineComponent,
    RegistreerimineComponent,
    TreenimineComponent,
    PraeguneTrennComponent,
    UusTrennComponent,
    EelnevadTrennidComponent,
    TeretulemastComponent,
    PaisComponent,
    KulgnaviNimekiriComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppMarsruutimineModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
