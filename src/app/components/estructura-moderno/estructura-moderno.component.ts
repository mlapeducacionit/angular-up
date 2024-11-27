import { Component } from '@angular/core';
import { Alumnos } from '../../models/alumnos';

@Component({
  selector: 'app-estructura-moderno',
  standalone: true,
  imports: [],
  templateUrl: './estructura-moderno.component.html',
  styleUrl: './estructura-moderno.component.css'
})
export class EstructuraModernoComponent {

  // ! PROPIEADADES/ATRIBUTOS
  mostrar = true

  /* public personas:string[] = [ */
  public personas:Array<string> = [
    'Pedro',
    'Juan',
    'Roberto',
    'Laura',
    'Natalia',
    'Cristian'
  ]

  /* alumnos:Array<any> = [ */
  alumnos:Alumnos[] = [
    { nombre: 'Juan', apellido: 'Perez', edad: 22, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png' },
    { nombre: 'María', apellido: 'Gomez', edad: 24, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png' },
    { nombre: 'Laura', apellido: 'Gutierrez', edad: 34, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png' },
    { nombre: 'Gloria', apellido: 'Fernandez', edad: 53, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png' },
    { nombre: 'Pedro', apellido: 'Hernandez', edad: 27, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png' },
    { nombre: 'Matias', apellido: 'Gimenez', edad: 34, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' }
  ]

  // ! Métodos

  agregarAlumno() {
    console.log('Agregando alumno...')
    const nuevoAlumno:Alumnos =  {
      nombre: 'Nahuel',
      apellido: 'Lopez',
      edad: 31,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'
    }

    this.alumnos.push(nuevoAlumno)

  }

  borrarAlumno(indice:number) {
    console.log('Borrando... ', indice)
    this.alumnos.splice(indice, 1)
  }

  borrarTodos() {
    this.alumnos = []
  }



}
