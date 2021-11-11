import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepresasComponent } from './components/represas/represas.component';
import { ErrorComponent } from './components/error/error.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    RepresasComponent,
    ErrorComponent,
    AcercaDeComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
