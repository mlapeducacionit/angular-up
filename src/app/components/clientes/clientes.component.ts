import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  // Propiedades
  clientes:string[] = []
  cliente:string = ''
  id: string = ''
  cat: string = ''


  // Inyección de dependencias (Es como una instancia dinamica) (Patrón de diseño Singleton)
  // Lo que va a lograr es que la única instancia se va a compartir con todos los compoentes a los cuales le haga la inyección
  constructor(private clienteService: ClientesService, activatedRouter: ActivatedRoute) {
    this.clientes = this.clienteService.getClientes()
    //console.log(this.clientes)

    activatedRouter.params
      .subscribe( params => {
        console.log('----------')
        console.log(params)
        this.id = params['id']
        this.cat = params['cat']
      })
  }

  // Métodos
  agregarCliente(cli:string):void {
    this.clienteService.agregarCliente(cli)
    this.cliente = ''
  }



}
