export class UserCreation {
  constructor(
    public id: number = 0,
    public email: string = '',
    public password: string = '',
    public nombre: string = '',
    public apellido: string = '',
    public direccion: string = '',
    public rol: number = 1
  ) {}
}

export class UserDisplay {
  constructor(
    public id: number = 0,
    public email: string = '',
    public nombre: string = '',
    public apellido: string = '',
    public direccion: string = '',
    public rol: number = 1
  ) {}
}
