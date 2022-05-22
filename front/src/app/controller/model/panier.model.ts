import {User} from "./User.model";
import {Formation} from "./formation.model";
import {ProduitPanierItem} from "./produit-panier-item.model";

export class Panier {
    public id: number;

    public reference: string;

    public prixTotal: number;

    public etatCommande: string;

    public dateAjout: string;

    public user: User;

    public formation: Formation;

    public produitPanierItems: Array<ProduitPanierItem>;

}