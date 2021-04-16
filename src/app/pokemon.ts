export interface pokeServiceRes {
    count:number;
    next:string;
    previous:null;
    results:IPokemon[];
}

export interface IPokemon {
    name:string;
    url:string;
}

export class Pokemon {
 
    nom:string;
    id:number;
    constructor(nom,id) {
    this.nom = nom;
    this.id = id;
     }
}
