import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {

  // Esta conectando la propiedad de clase con el atributo html puesto en la plantilla
  //@Input() colorInit:string = 'blue'
  @Input('colorInit') colorInicial!:string // No es obligatorio la inicialización
  @Input() colorTexto!:string
  @Input('appResaltar') colorPrincipal:string = ''

  // Al usar la directiva es como si hiciera un new (se crea la instancia y se ejecuta el constructor)
  // Y tengo como si hubiera agregado un addEventListener el objeto e -> el
  constructor(private el:ElementRef) {
    console.log('Utilizando la directiva', el)
    // El contructor me da acceso directo al elemento html

  }


  // Decorador para darle la capacidad al método para estar atento a un evento.
  @HostListener('mouseenter') onMouseEnter() {
    console.warn('Pasaron por arriba')
    this.resaltar(this.colorInicial, this.colorTexto)
    // console.log(this.colorInit)
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.warn('salieron del elemento')
    this.resaltar('', '')
  }

  private resaltar(colorBase:string|null, colorTexto:string) {
    this.el.nativeElement.style.backgroundColor = colorBase
    this.el.nativeElement.style.color = colorTexto
    this.el.nativeElement.style.border = '5px solid black'
  }

}
