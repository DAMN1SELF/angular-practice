import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'luchita',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  public fruta='manzana';

  constructor() { }

  ngOnInit(): void {
  }

}
