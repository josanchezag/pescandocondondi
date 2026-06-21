import { Routes } from "@angular/router";
import { RepresasComponent } from "./components/represas/represas.component";
import { ErrorComponent } from "./components/error/error.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { NuestroEquipoComponent } from "./components/nuestro-equipo/nuestro-equipo.component";

export const appRoutes: Routes = [
  { path: '', component: AcercaDeComponent },
  { path: 'represas', component: RepresasComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nuestro-equipo', component: NuestroEquipoComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: '**', component: ErrorComponent }
];

