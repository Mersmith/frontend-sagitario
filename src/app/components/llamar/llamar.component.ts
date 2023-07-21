import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-llamar',
  templateUrl: './llamar.component.html',
  styleUrls: ['./llamar.component.css']
})
export class LlamarComponent {

  celular = environment.celular;

}
