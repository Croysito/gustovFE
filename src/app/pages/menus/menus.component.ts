import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';
import { MenuModel } from '../../models/menu.model';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  
  menus: MenuModel[] = [];
  cargando= false;
  constructor( private menusService: MenusService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.menusService.getMenus().subscribe((resp: any)=> { this,this.menus= resp.data;this.cargando=false});
  }

}
