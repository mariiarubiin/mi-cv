import { Component } from '@angular/core';
import { PROYECTOS } from '../data/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  proyectos = PROYECTOS;
}
