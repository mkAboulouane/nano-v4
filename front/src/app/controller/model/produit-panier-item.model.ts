import {ProduitBio} from "./produit-bio.model";
import {Panier} from "./panier.model";

export class ProduitPanierItem {
    public id: number;

    public prix: number;

    public produitBio: ProduitBio;

    public quantite: number;

    public panier: Panier;
}
