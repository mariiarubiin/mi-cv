import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  oscuro = signal(this.temaInicial());

  constructor() {
    this.aplicar();
  }

  alternar() {
    this.oscuro.update((v) => !v);
    this.aplicar();
  }

  private aplicar() {
    const tema = this.oscuro() ? 'dark' : 'light';
    document.documentElement.dataset['theme'] = tema;
    try { localStorage.setItem('tema', tema); } catch {}
  }

  private temaInicial(): boolean {
    try {
      const guardado = localStorage.getItem('tema');
      if (guardado) return guardado === 'dark';
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
