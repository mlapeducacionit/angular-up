import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelComponent,
    ContenidoComponent
  ],
  exports: [
    ContenidoComponent /* el componente que me va a exponer todos los demás en mi aplicación */
  ]
})
export class MimoduloModule { }
