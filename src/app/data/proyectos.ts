export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  web?: string;
  codigo?: string;
}

export const PROYECTOS: Proyecto[] = [];
