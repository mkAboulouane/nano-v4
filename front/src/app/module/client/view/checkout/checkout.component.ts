import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {DomSanitizer} from "@angular/platform-browser";
import {CommandeService} from "../../../../controller/service/Commande.service";
import {Commande} from "../../../../controller/model/commande.model";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    amount: number;
    quantity: number = 1;

    constructor(private materielBioService: MaterielBioService
                , private sanitizer: DomSanitizer , private commandeService: CommandeService) {
    }

    ngOnInit(): void {
        this.findAll();
    }


    findAll(){
        this.commandeService.findByUser().subscribe(
            data => {
                this.commandes = data;
                 this.commandes = this.commandes.reverse();
                this.commandes.forEach(e=>{
                    if(e.produitBio !== null){
                        let objectURL = 'data:image/jpeg;base64,' + e.produitBio.imagePrincipal.picByte;
                         e.produitBio.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
                    }
                })
                this.calculAmount();
            },error => console.log(error)
        )
    }

    calculAmount() {
        this.amount = 0;
        this.commandes.forEach(e =>{
            console.log('e.total = '+e.total);
            this.amount += e.total;
        });
    }

    get commandes(): Array<Commande>{
        return this.commandeService.commandes;
    }

    set commandes(value: Commande[]){
        this.commandeService.commandes = value;
    }


}
