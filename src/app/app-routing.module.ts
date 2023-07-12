import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PoliticaPaginaComponent } from './pages/politica/politica.component';
import { ServiciosPaginaComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'servicios', component: ServiciosPaginaComponent },
  { path: 'politica', component: PoliticaPaginaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }