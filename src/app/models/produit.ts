import { Categorie } from "../categorie";
import { Depot } from "./depot";

export class Produit {
  id!: number;
  nom!: string;
  description!: string;
  prixunitaire!: any;
  quantite_stock!:number;
  disponible!:Boolean;
  photo!: any;
  categorie!:Categorie
  depot!:Depot;
  

}
