export class MedicoDisplay {
    constructor(
      public id: number = 0,
      public email: string = '',
      public cedula: string = '',
      public nombre: string = '',
      public apellido: string = '',
      public direccion: string = '',
      public rol: number = 2
    ) {}
}