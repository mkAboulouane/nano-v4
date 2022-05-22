import {Panier} from "./panier.model";

export class Paiment {
    public id: number;
    public reference: string;
    public prix: number;
    public payedAt: number;
    public panier: Panier;
    public typePaiment: string;
}
