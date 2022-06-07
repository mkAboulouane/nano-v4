import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-produit-bio',
    templateUrl: './produit-bio.component.html',
    styleUrls: ['./produit-bio.component.css']
})
export class ProduitBioComponent implements OnInit {
    // produitBios: ProduitBio[];

    constructor(private materielBioService: MaterielBioService,
    private sanitizer: DomSanitizer,
    ) {
    }

    ngOnInit(): void {
    this.findAll();
    }

    findAll(){
        this.materielBioService.findAll().subscribe(  data => {
            data.forEach(e=>{
                let objectURL = 'data:image/jpeg;base64,' + e.imagePrincipal.picByte;
                e.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            });
            this.produitBios = data;
            console.log(data);
        },error => {
            console.log(error);
            });
    }

    get produitBios(): Array<ProduitBio>{
        return this.materielBioService.produitBios;
    }

    set produitBios(value: Array<ProduitBio>){
        this.materielBioService.produitBios = value;
    }

}
