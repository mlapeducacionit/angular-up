import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { VerificarEspacios, VerificarEspaciosConMensajePersonalizado } from '../../validators/espacios.validator';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [
    FormsModule, /* Modulo de Template driven */
    CommonModule,
    ReactiveFormsModule /* Modulo de reactive Form */
  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {

  /* ------------------ */
  /* Template Driven    */
  /* ------------------ */
  minimoApellido:string = "8"


  // propiedades/atributos
  form = {
    nombre: '',
    apellido: '',
    correo: ''
  }

  logNombreControl(nombreControl:NgModel) {
    console.log(nombreControl)
  }

  logCorreoControl(correoControl:NgModel) {
    console.log(correoControl)
  }

  enviar(loginForm:NgForm) {
    console.log('Se envía el form...', this.form)

    console.log(loginForm)

    loginForm.form.reset()
  }

  /* ------------------ */
  /* Reactive Form      */
  /* ------------------ */

  // Creando la propiedad reactiva
  f:FormGroup
  cantidadCaracteresfRNombre = 5


  constructor(private fb:FormBuilder) {
    this.f = fb.group(
      {
        nombre: ['', Validators.compose([
          Validators.required,
          Validators.minLength(this.cantidadCaracteresfRNombre),
          /* VerificarEspacios */
          VerificarEspaciosConMensajePersonalizado('Campo con espacios intermedios!')
        ])],
        apellido: ['', Validators.required],
        edad: '',
        contacto: fb.group(
          {
            correo: '',
            telefono: '',
          }
        ),
        password: ''
      }
    )
  }

  enviarRf() {
    console.log(this.f)
    console.log(this.f.value)
  }

}
