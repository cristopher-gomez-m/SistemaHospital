import { Historial } from "./historial";

export class HistorialDisplay {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public apellido: string = '',
    public historial_clinico?: Historial,
  ) {}
}
