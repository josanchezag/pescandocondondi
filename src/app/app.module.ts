import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepresasComponent } from './components/represas/represas.component';
import { ErrorComponent } from './components/error/error.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    RepresasComponent,
    ErrorComponent,
    AcercaDeComponent,
    ContactenosComponent,
    ServiciosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
