import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PoliticaPaginaComponent } from './pages/politica/politica.component';
import { ServiciosPaginaComponent } from './pages/servicios/servicios.component';
import { TransportePersonalPaginaComponent } from './pages/transporte-personal-pagina/transporte-personal-pagina.component'; 
import { AlquilarUnidadesPaginaComponent } from './pages/alquilar-unidades-pagina/alquilar-unidades-pagina.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'servicios', component: ServiciosPaginaComponent },
  { path: 'certificaciones', component: PoliticaPaginaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'transporte-de-personal', component: TransportePersonalPaginaComponent },
  { path: 'alquiler-de-unidades', component: AlquilarUnidadesPaginaComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }