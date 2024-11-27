import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  // atributos/propiedad
  // ! Solamente puedo acceder desde la propia clase a una propiedad privada
  //private mensaje:string = 'Hola mundo. Bienvenido Maxi!'
  public mensaje = 'Hola mundo. Bienvenido Maxi!'
  valor1 = 345
  valor2 = 789
  contador = 0
  contador2 = 100
  valor3 = 123
  valor4 = 987


  // métodos
  incrementarX5() {
    this.contador2 = this.contador2 + 5
  }

  modificar(e:any) {
    console.log('Escribieron en el input')
    console.log(e)
    let valor = e.target.value
    console.log(valor)

    this.valor3 = valor
  }

}


