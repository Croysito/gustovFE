import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuModel } from '../../models/menu.model';
import { MenusService } from '../../services/menus.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu: MenuModel = new MenuModel();

  constructor(private menusService: MenusService) { }

  ngOnInit(): void {
  }
  guardar (form: NgForm){
    if (form.invalid){
      console.log('Formulario no válido');
      return;
    };

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    peticion = this.menusService.crearMenu(this.menu);

    peticion.subscribe( resp=>{
      Swal.fire({
        title: this.menu.fecha,
        text: 'Se creó correctamente'
      })
    })

  }

}
