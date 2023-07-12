import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { testimonioItems } from './testimonios-items'; 

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {

  testimonios = testimonioItems;

  posicionActual = 0;
  mostrarElementos = 3;
  intervalId: any;

  @ViewChild('contenedorItems', { static: true }) contenedorItemsRef!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.actualizarMostrarElementos();
    this.posicionActual = 0;
    this.desplazarContenedor();
  }

  ngOnInit() {
    this.actualizarMostrarElementos();
    //this.iniciarDesplazamientoAutomatico();
  }

  ngOnDestroy() {
    this.detenerDesplazamientoAutomatico();
  }

  retroceder() {
    if (this.posicionActual > 0) {
      this.posicionActual--;
      this.desplazarContenedor();
    }
  }

  siguiente() {
    if (this.posicionActual < this.testimonios.length - this.mostrarElementos) {
      this.posicionActual++;
      this.desplazarContenedor();
    } else {
      this.posicionActual = 0;
      this.desplazarContenedor();
    }
  }

  desplazarContenedor() {
    const contenedorItems = this.contenedorItemsRef.nativeElement;
    const itemWidth = contenedorItems.offsetWidth / this.mostrarElementos;
    const desplazamiento = -this.posicionActual * itemWidth;
    contenedorItems.style.transform = `translateX(${desplazamiento}px)`;
  }

  actualizarMostrarElementos() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1400) {
      this.mostrarElementos = 3;
    } else if (windowWidth <= 1400 && windowWidth > 1000) {
      this.mostrarElementos = 2;
    } else if (windowWidth <= 1000) {
      this.mostrarElementos = 1;
    }
  }

  iniciarDesplazamientoAutomatico() {
    this.intervalId = setInterval(() => {
      this.siguiente();
    }, 10000);
  }

  detenerDesplazamientoAutomatico() {
    clearInterval(this.intervalId);
  }

}
