import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css',
})
export class Preguntas {
  items = [
    { p: '¿Qué tipo de proyectos te gustan?', r: 'Aplicaciones completas donde pueda trabajar la interfaz, la API y la base de datos.' },
    { p: '¿Con qué tecnologías trabajas?', r: 'Angular y TypeScript en frontend, y experiencia en backend y bases de datos.' },
    { p: '¿Estás abierta a nuevas oportunidades?', r: 'Sí. Escríbeme por email o LinkedIn y hablamos.' },
  ];
}
