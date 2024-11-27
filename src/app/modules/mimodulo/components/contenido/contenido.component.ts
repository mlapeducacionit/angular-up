import { Component } from '@angular/core';
import { PanelComponent } from "../panel/panel.component";
import { MimoduloService } from '../../services/mimodulo.service';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  tituloContenido:string = ''

  constructor(private miModuloService: MimoduloService ) {
    this.tituloContenido = miModuloService.getTituloContenido()
  }

}
