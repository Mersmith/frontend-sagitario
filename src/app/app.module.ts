import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderPrincipalComponent } from './components/slider-principal/slider-principal.component';
import { MisionComponent } from './components/mision/mision.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { LlamarComponent } from './components/llamar/llamar.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AlbumComponent } from './components/album/album.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisionComponent } from './components/vision/vision.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { LineaComponent } from './components/linea/linea.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PoliticaPaginaComponent } from './pages/politica/politica.component';
import { ServiciosPaginaComponent } from './pages/servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { CargaComponent } from './components/carga/carga.component';
import { IconosFlotantesComponent } from './components/iconos-flotantes/iconos-flotantes.component';
import { DesplazarTopComponent } from './components/desplazar-top/desplazar-top.component';
import { TransportePersonalPaginaComponent } from './pages/transporte-personal-pagina/transporte-personal-pagina.component';
import { AlquilarUnidadesPaginaComponent } from './pages/alquilar-unidades-pagina/alquilar-unidades-pagina.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { AnimacionComponent } from './components/animacion/animacion.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderComponent,
    FooterComponent,
    SliderPrincipalComponent,
    MisionComponent,
    NosotrosComponent,
    ContactoComponent,
    ServiciosComponent,
    ClientesComponent,
    EstadisticasComponent,
    LlamarComponent,
    EquipoComponent,
    CaracteristicasComponent,
    TestimoniosComponent,
    AlbumComponent,
    InicioComponent,
    BannerComponent,
    VisionComponent,
    PoliticaComponent,
    LineaComponent,
    SeguridadComponent,
    SomosComponent,
    PoliticaPaginaComponent,
    ServiciosPaginaComponent,
    CargaComponent,
    IconosFlotantesComponent,
    DesplazarTopComponent,
    TransportePersonalPaginaComponent,
    AlquilarUnidadesPaginaComponent,
    CertificacionesComponent,
    AnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
