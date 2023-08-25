import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { nosotrosItems } from './nosotros-items';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  nosotros = nosotrosItems;

  posicionActual = 0;
  mostrarElementos = 1;
  intervalId: any;

  ngOnInit() {
    this.iniciarDesplazamientoAutomatico();
  }

  ngOnDestroy() {
    this.detenerDesplazamientoAutomatico();
  }

  siguiente() {
    if (this.posicionActual < this.nosotros.length - 1) {
      this.posicionActual++;
    } else {
      this.posicionActual = 0;
    }
  }

  iniciarDesplazamientoAutomatico() {
    this.intervalId = setInterval(() => {
      this.siguiente();
    }, 5000);
  }

  detenerDesplazamientoAutomatico() {
    clearInterval(this.intervalId);
  }

}
