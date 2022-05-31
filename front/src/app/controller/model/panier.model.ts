import {User} from "./User.model";
import {Formation} from "./formation.model";
import {ProduitPanierItem} from "./produit-panier-item.model";

export class Panier {
    id: number;

    reference: string;

    lieu: string;
    ville: string;
    pays: string;

    phone: string;

    prixTotal: number;

    etatCommande: string;

    dateAjout: string;

    user: User;

    formation: Formation;

    produitPanierItems: Array<ProduitPanierItem>;

}
