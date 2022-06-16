import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    produitBios: ProduitBio[] = [];


    constructor(private materielBioService: MaterielBioService , private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.voir();
    }

    voir(){
        console.log('this link : ')
        this.materielBioService.voirAussi(6).subscribe(
            data => {
                data.forEach(e=>{
                    let objectURL = 'data:image/jpeg;base64,' + e.imagePrincipal.picByte;
                    e.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
                    console.log('e = '+e);
                });
                this.produitBios = data;
            }, error => console.log(error))
    }

    buy() {

    }
}
