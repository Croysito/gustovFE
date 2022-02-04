import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../../services/platos.service';
import { PlatoModel } from '../../models/plato.model';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos: PlatoModel[] = [];
  cargando= false;

  constructor( private platosService: PlatosService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.platosService.getPlatos().subscribe((resp: any)=> { this.platos= resp.data;this.cargando=false});
  }

}
