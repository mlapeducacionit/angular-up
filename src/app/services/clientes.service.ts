import { Injectable } from '@angular/core';
import { dbClientes } from '../constants/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Propiedad
  private clientes:string[] = dbClientes

  constructor() { }

  // Métodos
  // ! GET CLIENTE
  getClientes():string[] {
    return this.clientes
  }

  // ! POST CLIENTE
  agregarCliente(cliente:string):void {
    this.clientes.push(cliente)
  }

  // ! DELETE CLIENTE
  borrarUltimoCliente():void {
    this.clientes.pop()
  }

}
