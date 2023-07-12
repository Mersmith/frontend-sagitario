import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  mensaje: string = '';
  celular = environment.celular;

  enviarMensaje() {
    const urlExterna = `https://api.whatsapp.com/send/?phone=${this.celular}&text=${this.mensaje}&app_absent=0`;
    window.open(urlExterna, '_blank');
    this.mensaje = '';
  }

}
