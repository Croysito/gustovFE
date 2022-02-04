import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatoModel } from '../../models/plato.model';
import { PlatosService } from '../../services/platos.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  
  plato: PlatoModel = new PlatoModel();

  constructor( private platosService: PlatosService) { }

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

    peticion = this.platosService.crearPlato(this.plato);

    peticion.subscribe( resp=>{
      Swal.fire({
        title: this.plato.nombre,
        text: 'Se creó correctamente'
      })
    })

  }

}
