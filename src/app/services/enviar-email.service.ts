import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EnviarEmailService {

    constructor(private http: HttpClient) { }

    enviarFormulario(formularioContacto: FormGroup): Observable<string> {
        const url = `${environment.apiUrl}/enviar-email.php`;
        const formData = new FormData();

        const nombre = formularioContacto.get('nombre')?.value;
        const correo = formularioContacto.get('correo')?.value;
        const celular = formularioContacto.get('celular')?.value;
        const asunto = formularioContacto.get('asunto')?.value;
        const cuerpo = formularioContacto.get('cuerpo')?.value;

        if (nombre && correo && celular && asunto && cuerpo) {
            formData.append('nombre', nombre);
            formData.append('correo', correo);
            formData.append('celular', celular);
            formData.append('asunto', asunto);
            formData.append('cuerpo', cuerpo);

            return this.http.post(url, formData, { responseType: 'text' }).pipe(
                catchError((error: any) => {
                    console.error('Error al enviar el correo electrónico:', error);
                    return throwError('Error al enviar el correo electrónico.');
                })
            );
        } else {
            console.error('Error al obtener los valores del formulario.');
            return throwError('Error al obtener los valores del formulario.');
        }
    }
}
