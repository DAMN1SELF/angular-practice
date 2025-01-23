import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verdurachonita',
  templateUrl: './verdurachonita.component.html',
  styleUrls: ['./verdurachonita.component.css']
})
export class VerdurachonitaComponent implements OnInit {
  listaVerduras='apio,poro,zapallo';

  constructor() { }

  ngOnInit(): void {
  }

}
