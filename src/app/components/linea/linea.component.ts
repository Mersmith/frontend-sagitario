import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {

  @Input() imagen: string = '';

}
