import { Component } from '@angular/core';
import { albumItems } from './album-items'; 

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  imagenes = albumItems;

  imagenSeleccionada: string | null = null;
  imagenActualIndex: number | null = null;

  mostrarImagen(url: string) {
    this.imagenSeleccionada = url;
    this.imagenActualIndex = this.imagenes.findIndex(imagen => imagen.url === url);
  }

  cerrarModal() {
    this.imagenSeleccionada = null;
    this.imagenActualIndex = null;
  }

  mostrarImagenAnterior() {
    if (this.imagenActualIndex !== null && this.imagenActualIndex > 0) {
      this.imagenActualIndex--;
      this.imagenSeleccionada = this.imagenes[this.imagenActualIndex].url;
    }
  }

  mostrarImagenSiguiente() {
    if (
      this.imagenActualIndex !== null &&
      this.imagenActualIndex < this.imagenes.length - 1
    ) {
      this.imagenActualIndex++;
      this.imagenSeleccionada = this.imagenes[this.imagenActualIndex].url;
    }
  }

}
