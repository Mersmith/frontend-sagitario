import { Component } from '@angular/core';
import { servicioItems } from './servicio-items'; 

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  servicios = servicioItems;

}
