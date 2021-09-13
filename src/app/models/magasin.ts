import { Gerant } from "./gerant";

export class Magasin {
  id!: number;
  nom!: string;
  date!: Date;
  addresse!: string;
  telephone!: string;
  email!: string;
  gerant!: Gerant;
}
