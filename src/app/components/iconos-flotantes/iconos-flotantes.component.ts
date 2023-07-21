import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iconos-flotantes',
  templateUrl: './iconos-flotantes.component.html',
  styleUrls: ['./iconos-flotantes.component.css']
})
export class IconosFlotantesComponent {

  celular = environment.celular;

}
