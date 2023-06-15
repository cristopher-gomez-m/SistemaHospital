export class Historial {
    constructor(
      public id:number= 0,
      public edad:number= 0,
      public altura:number= 0,
      public peso:number= 0,
      public masa_corporal:number= 0,
      public temperatura:number= 0,
      public frecuencia_respiratoria:number= 0,
      public presion_arterial:number= 0,
      public frecuencia_cardiaca:number= 0,
      public diabetes:boolean= false,
      public diabetes_descripcion: string='',
      public tiroideas:boolean= false,
      public tiroideas_descripcion: string='',
      public hipertension:boolean= false,
      public hipertension_descripcion: string='',
      public cardiopatia:boolean= false,
      public cardiopatia_descripcion: string='',
      public traumatismo:boolean= false,
      public traumatismo_descripcion: string='',
      public cancer:boolean= false,
      public cancer_descripcion: string='',
      public otros:boolean= false,
      public otros_descripcion: string=''
    ) {}
}

