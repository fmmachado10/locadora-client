import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca.model';
import { MarcaService } from '../services/marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  lista: Marca[] = [];
  obj: Marca = {id: 0, nome: ''};
  mens = '';

  constructor(private api: MarcaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.api.consultar()
    .toPromise()
    .then
    (res => {
      this.lista = res;
    });
  }
}
