import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios:Usuario[] = []

  private handleError(error: any) {

    if (error.error instanceof ErrorEvent) {
      console.log('Error HTTP frontend')
    } else {
      console.log('Error HTTP backend')
    }

    const e = new Error('Error de comunicación HTTP')

    return throwError(() => e)
  }

  // inyección de dependencias del servicio
  constructor(private usuariosService: UsuariosService) {

      this.usuariosService.obtener()
        .pipe(
          catchError(error => this.handleError(error))
        )
        .subscribe((usuariosBack:Usuario[]) => {
          console.log(usuariosBack)
          this.usuarios = usuariosBack
        })

  }

  /* --------- Servicio API RESTFul -> PUT ---------- */
  actualizarUsuario(id:string|undefined) {
    const usuario:Usuario = {
      "nombre": "Juan Perez (Editado)",
      "descripcion": "Esta es la descripción de Juancito (Editado)",
      "comentarios": "Alto comentario le dejaron a Juancito (Editado)",
      "foto": "https://loremflickr.com/640/480/transport",
    }

    // 1. Edición del usuario en el back
    this.usuariosService.actualizar(usuario, id)
      .subscribe((usuario:Usuario) => {
        console.log(usuario)

        // 2. Editar el usuario en el estado
        const index = this.usuarios.findIndex(user => user.id === id)
        this.usuarios.splice(index, 1, usuario)
      })

  }

  /* --------- Servicio API RESTFul -> POST ---------- */
  guardarUsuario() {
    const usuario:Usuario = {
      "nombre": "Juan Perez",
      "descripcion": "Esta es la descripción de Juancito",
      "comentarios": "Alto comentario le dejaron a Juancito",
      "foto": "https://loremflickr.com/640/480/transport",
    }

    // 1. Agregar el usuario en el back
    this.usuariosService.guardar(usuario)
      .subscribe((usuario:Usuario) => {
        console.log(usuario)
        // 2. Lo agrego en el estado de usuarios.
        this.usuarios.push(usuario)
      })

  }

  /* --------- Servicio API RESTFul -> Delete ---------- */
  borrarUsuario(id:string|undefined) {
    // console.log(id)

    // 1. Borrado en el remoto
    this.usuariosService.borrar(id)
      .subscribe((usuario:Usuario) => {
        console.log(usuario)

         // 2. Borrado del estado local.
         // 2.1 Buscar en que posición del array tengo el elemento con el id que se quiere borrar
         const index = this.usuarios.findIndex(user => user.id == id)
         this.usuarios.splice(index, 1)
      })
  }

}
