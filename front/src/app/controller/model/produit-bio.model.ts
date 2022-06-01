import {Image} from "./image.model";

export class ProduitBio {
     id: number;
     nom: string;
     promotion: null | boolean;
     visible: null | boolean;
     boolean: null | boolean;
     addedAt: string;
     quantity: number;
     description: string;
     photos: string;
     prix: number;
     prixAncien: number;
     updatedAt: string;

     imagePrincipal: Image;

}
