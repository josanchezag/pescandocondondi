import { Component, ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";

import { RepresasComponent } from "./components/represas/represas.component";
import { ErrorComponent } from "./components/error/error.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";

const appRoutes: Routes=[
  {path: '', component: AcercaDeComponent},
  {path: 'represas', component: RepresasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'nuestro-equipo', component: AcercaDeComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

