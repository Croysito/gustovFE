import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlatoModel } from '../models/plato.model';
import { map,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private url= 'http://localhost:3000/api'
  constructor( private http: HttpClient) { }

  crearPlato ( plato: PlatoModel){
    return this.http.post(`${this.url}/plato`,plato).pipe(map((resp:any)=>{plato  = resp.data; return plato}));
  }

  getPlatos(){
 
    return this.http.get(`${this.url}/plato`).pipe(delay(1000));
  }
}
