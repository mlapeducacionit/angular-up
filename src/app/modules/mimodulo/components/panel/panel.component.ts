import { Component } from '@angular/core';
import { MimoduloService } from '../../services/mimodulo.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  tituloPanel:string = ''
  cuerpoPanel:string = ''

  constructor(private miModuloService: MimoduloService) {
    this.tituloPanel = miModuloService.getTituloPanel()
    this.cuerpoPanel = miModuloService.getCuerpoPanel()
  }
}
