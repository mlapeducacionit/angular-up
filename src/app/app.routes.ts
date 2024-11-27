import { Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { EstructuraComponent } from './components/estructura/estructura.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EstructuraModernoComponent } from './components/estructura-moderno/estructura-moderno.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }, /* http://localhost:4200/ */
  { path: 'binding',  component: BindingComponent },
  { path: 'estructura', component: EstructuraComponent },
  { path: 'atributos', component: AtributosComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/:id', component: ClientesComponent },
  { path: 'clientes/:id/:cat', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'estructura-moderno', component: EstructuraModernoComponent },
  //{ path: '**', redirectTo: 'estructura' }
  { path: '**', component: ErrorComponent }
];
