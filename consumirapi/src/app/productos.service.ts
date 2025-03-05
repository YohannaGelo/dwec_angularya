import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE="https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Creamos una propiedad del tipo HttpClient
  constructor(private httpclient:HttpClient) { }

  ///// Aquí iran los métodos necesarios para rescatar datos, insertar, etc...

  // Rescatar todo
  all() {
    return this.httpclient.get<any>(`${URL_BASE}`); // esto es un objeto observable
  }

  // Rescatar uno por id

  // Actualizar

  // Borrar
}
