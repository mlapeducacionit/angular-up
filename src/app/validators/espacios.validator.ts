import { AbstractControl } from "@angular/forms";


export function VerificarEspacios(c: AbstractControl) {

  if (c.value == null) return null

  console.log(c)
  console.log(c.value)

  if (c.value.includes(' ')) {
    return { conEspacios: 'Este campo no debe poseer espacios intermedios' }
  }

  return null

}

/* ----------------------------------------- */
/* Con mensaje personalizado                 */
/* ----------------------------------------- */

export function VerificarEspaciosConMensajePersonalizado(mensaje:string) {

  return function VerificarEspacios(c: AbstractControl) {

    if (c.value == null) return null

    console.log(c)
    console.log(c.value)

    if (c.value.includes(' ')) {
      return { conEspacios: mensaje }
    }

    return null

  }

}



