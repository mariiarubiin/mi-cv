import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi implements OnInit, OnDestroy {
  private frases = [
    'Desarrolladora fullstack',
    'Angular y TypeScript',
    'De la interfaz a la base de datos',
  ];
  texto = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  private i = 0;
  private j = 0;
  private borrando = false;

  ngOnInit() {
    this.escribir();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private escribir() {
    const frase = this.frases[this.i];
    this.j += this.borrando ? -1 : 1;
    this.texto.set(frase.slice(0, this.j));

    let espera = this.borrando ? 40 : 80;
    if (!this.borrando && this.j === frase.length) {
      this.borrando = true;
      espera = 1500;
    } else if (this.borrando && this.j === 0) {
      this.borrando = false;
      this.i = (this.i + 1) % this.frases.length;
      espera = 400;
    }
    this.timer = setTimeout(() => this.escribir(), espera);
  }
}
