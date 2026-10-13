import { Component } from '@angular/core';
import { Header } from './header/header';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [Header, SobreMi, Proyectos, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
