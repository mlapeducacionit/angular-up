import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResaltarDirective } from '../../directives/resaltar.directive';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-atributos',
  standalone: true,
  imports: [CommonModule, ResaltarDirective],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})
export class AtributosComponent {

  estado1 = true
  estado2 = true
  clientes:string[] = []

  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getClientes()
    console.log(this.clientes)
  }

  // ! Métodos

  eliminarUltimo() {
    this.clientesService.borrarUltimoCliente()
  }


  cambiarPropiedad(estado:boolean) {
    return {
      color: estado ? 'crimson' : 'darkblue',
      backgroundColor: estado ? 'black' : 'gold',
      padding: '10px'
    }
  }

  cambiarClase(estado:boolean,claseInicial:string, claseFinal: string) {
    return {
      btn: true,
      [claseInicial]: estado,
      [claseFinal]: !estado
    }
  }

}
