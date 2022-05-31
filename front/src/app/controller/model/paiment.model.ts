import {Panier} from "./panier.model";

export class Paiment {
     id: number;
     reference: string;
     prix: number;
     payedAt: number;
     panier: Panier;
     typePaiment: string;
}
