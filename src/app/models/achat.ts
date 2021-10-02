import { Client } from "./client";
import { ItemProduit } from "./item-produit";

export class Achat {
    
    public items:Map<number,ItemProduit> = new Map();
    public client!:Client
    constructor (public nom:string){}
}
