import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MimoduloService {

  private tituloContenido:string = 'Componente Contenido!!!'
  private tituloPanel:string = 'Componente Panel!!!'
  private cuerpoPanel:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt nobis, totam fuga error inventore libero! Suscipit ipsam minima eum!'

  constructor() { }

  getTituloContenido() {
    return this.tituloContenido
  }

  getTituloPanel() {
    return this.tituloPanel
  }

  getCuerpoPanel() {
    return this.cuerpoPanel
  }
}
