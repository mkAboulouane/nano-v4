import {ProduitBio} from "./produit-bio.model";
import {Panier} from "./panier.model";

export class ProduitPanierItem {
     id: number;

     prix: number;

     produitBio: ProduitBio;

     quantite: number;

     panier: Panier;
}
