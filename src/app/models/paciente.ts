export class PacienteDisplay {
    constructor(
      public id: number = 0,
      public email: string = '',
      public nombre: string = '',
      public apellido: string = '',
      public direccion: string = '',
      public rol: number = 1
    ) {}
}