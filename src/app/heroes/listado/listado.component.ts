import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Goku', 'Gohan', 'Krillin', 'Vegeta'];
  heroeBorrado: string = '';
  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  borrar(): void {
    this.flag = true;
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
