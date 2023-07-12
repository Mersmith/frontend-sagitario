import { Component, OnInit } from '@angular/core';
import { sliderItems } from './slider-items';

@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit{

  sliders = sliderItems;

  posicionActual = 0;
  intervalo: any;

  ngOnInit() {
    this.iniciarDesplazamiento();
  }

  ngOnDestroy() {
    this.detenerDesplazamiento();
  }

  iniciarDesplazamiento() {
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 6000);
  }

  detenerDesplazamiento() {
    clearInterval(this.intervalo);
  }

  retroceder() {
    this.posicionActual = (this.posicionActual - 1 + this.sliders.length) % this.sliders.length;
    this.reiniciarDesplazamiento();
  }

  siguiente() {
    this.posicionActual = (this.posicionActual + 1) % this.sliders.length;
    this.reiniciarDesplazamiento();
  }
 
  reiniciarDesplazamiento() {
    this.detenerDesplazamiento();
    this.iniciarDesplazamiento();
  }
}
