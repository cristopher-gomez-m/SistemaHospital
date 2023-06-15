export class Cita{
    constructor(
        public userId:number=0,
        public consultorioId:number=0,
        public fecha: string = '',
        public hora: string = '',
    ){}
}


export class CitaDisplay{
    constructor(
        public userId:number=0,
        public consultorio:string='',
        public fecha: string = '',
        public hora: string = '',
    ){}
}