import {Component} from '@angular/core';
import {MaterielBioService} from "../../../../../controller/service/Materiel-bio.service";
import {Router} from "@angular/router";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";

@Component({
    selector: 'app-produit-bio-edit',
    templateUrl: './produit-bio-edit.component.html',
    styleUrls: ['./produit-bio-edit.component.css']
})
export class ProduitBioEditComponent{

    constructor(private materielBioService: MaterielBioService , private router: Router){
    }


    submit() {
    this.materielBioService.edit().subscribe(
        data => {
            console.log(data);
            this.router.navigate(['/admin/produit-bio'])
        },error => {
            console.log(error);
        }
    )

    }


    /*  getters and setters */

    get selectedProduitBio(): ProduitBio{
        return this.materielBioService.selectedproduitBio;
    }

    set selectedProduitBio(value: ProduitBio){
        this.materielBioService.selectedproduitBio = value;
    }


}
