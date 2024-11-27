import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  /* private url = 'http://localhost:8080/usuarios/' */
  //private url = 'https://6643e84c6c6a65658708af06.mockapi.io/usuarioss/'
  private url = environment.apiUrl

  // Inyección de dependencias del httpClient
  // Cuando uso el httpClient tengo que colocar el provider en el app.config.ts
  constructor(private httpClient:HttpClient) {
    console.log(this.url)
  }

  // ! GET - READ
  obtener():Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
  }

  // ! POST - CREATE
  guardar(usuario:Usuario):Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, usuario)
  }

  // ! PUT
  actualizar(usuario:Usuario, id:string|undefined):Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.url+id, usuario)
  }

  // ! DELETE
  borrar(id:string|undefined):Observable<Usuario> {
    return this.httpClient.delete<Usuario>(this.url+id)
  }

}
