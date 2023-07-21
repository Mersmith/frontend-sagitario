import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnviarEmailService } from 'src/app/services/enviar-email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  titulo = 'Contáctanos';

  formularioContacto: FormGroup;

  estadoEnvio: string = '';

  mostrandoCarga: boolean = false;

  constructor(
    public formulario: FormBuilder,
    private enviarEmailService: EnviarEmailService
  ) {

    this.formularioContacto = this.formulario.group({
      nombre: [''],
      correo: [''],
      celular: [''],
      asunto: [''],
      cuerpo: [''],
    })

  }

  enviarFormulario(): void {

    this.estadoEnvio = '';
    this.mostrandoCarga = true;

    this.enviarEmailService.enviarFormulario(this.formularioContacto).subscribe(
      (response) => {
        if (response === 'ok') {
          this.estadoEnvio = 'Correo enviado correctamente.';
        } else {
          this.estadoEnvio = 'Error al enviar el correo electrónico.';
        }
        this.resetFormulario();
        this.mostrandoCarga = false;
      },
      (error) => {
        this.estadoEnvio = 'Error al enviar el correo electrónico.';
        this.resetFormulario();
        this.mostrandoCarga = false;
      }
    );

  }

  resetFormulario(): void {
    this.formularioContacto.reset();
  }

}
