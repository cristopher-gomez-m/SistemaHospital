import { UserDisplay } from "./user";

export class Consultorio{
    constructor(
        public id:number=0,
        public especialidad: string = '',
        public medico:UserDisplay,
    ){}
}