import { Component, OnInit } from '@angular/core';

class Verdura {
  constructor(
    public nombre: string,
    public precio: number,
    public temporada: boolean
  ) {}
}

@Component({
  selector: 'app-verdurachonita',
  templateUrl: './verdurachonita.component.html',
  styleUrls: ['./verdurachonita.component.css']
})



export class VerdurachonitaComponent implements OnInit {
  listaVerduras='apio,poro,zapallo';
   public precioApio : number =2 ;
   public verdura: Verdura;
   public verduras: Array<Verdura>;
   public configuracionTemporada: boolean;
   public tituloboton: string ;


   constructor() {
    // Inicializamos una verdura principal
    this.verdura = new Verdura('Apio', 2.5, true);

    // Lista de verduras
    this.verduras = [
      new Verdura('Poro', 3.0, false),
      new Verdura('Zanahoria', 1.8, true),
      new Verdura('Calabaza', 4.2, true),
      new Verdura('Calabaza 1', 4.2, false),
      new Verdura('Calabaza 2', 4.2, false),
      new Verdura('Calabaza 3', 4.2, true)

    ];

    // Indicamos si estamos en temporada o no
    this.configuracionTemporada = false;
    this.tituloboton='aea';
  }

  ngOnInit() {
    console.log(this.verdura);
    console.log(this.verduras);
  }

  cambiarTemporada() {
    console.log(!this.configuracionTemporada)
    this.configuracionTemporada = !this.configuracionTemporada;
    if(this.configuracionTemporada ==false){
      this.tituloboton='Frutas en Temporada';
    }else{
      this.tituloboton='Frutas fuera de Temporada';
    }
  }
}
