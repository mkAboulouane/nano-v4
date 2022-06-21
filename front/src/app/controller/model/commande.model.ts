import {Formation} from "./formation.model";
import {ProduitBio} from "./produit-bio.model";
import {User} from "./User.model";

export class Commande  {
    id: number;
    reference: string;
    total: number;
    addedAt: Date;
    payeAt: Date;
    paye: boolean;

    formation = new Formation();
    produitBio = new ProduitBio();
    user: User;

}
