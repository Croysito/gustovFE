import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuModel } from '../models/menu.model';
import { map,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  
  private url= 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  crearMenu ( menu: MenuModel){
    return this.http.post(`${this.url}/menu`,menu).pipe(map((resp:any)=>{menu  = resp.data; return menu}));
  }

  getMenus(){
 
    return this.http.get(`${this.url}/menu`).pipe(delay(1000));
  }
}
