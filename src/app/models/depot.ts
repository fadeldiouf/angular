import { Fournisseur } from "./fournisseur";

export class Depot {
    id!: number;
    libelle!: string;
    date!: Date;
    quantiteinitial!:any;
    quantitecourant!:any;
    fournisseur!:Fournisseur
}
