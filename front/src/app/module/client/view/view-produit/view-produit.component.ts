import {Component, OnDestroy, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Location} from "@angular/common";
import {CommandeService} from "../../../../controller/service/Commande.service";
import {Commande} from "../../../../controller/model/commande.model";


@Component({
    selector: 'app-view-produit',
    templateUrl: './view-produit.component.html',
    styleUrls: ['./view-produit.component.scss']
})
export class ViewProduitComponent implements OnInit {

    constructor(private materielBioService: MaterielBioService
                ,private commandeService: CommandeService
        , private router: Router
        , private sanitizer: DomSanitizer
        , private location: Location
        , private activatedRoute: ActivatedRoute) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
        // activatedRoute.params.subscribe(val => {
        //     this.findById();
        //     this.voirAussi();
        //     // put the code from `ngOnInit` here
        // });
    }

    produit = new ProduitBio();
    produitBios: ProduitBio[] = [];
    linkId: number;


    ngOnInit(): void {
        this.findById();
        this.voirAussi();
    }


    findById() {
        this.linkId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.materielBioService.findById(this.linkId).subscribe(
            data => {
                this.produit = data;
                let objectURL = 'data:image/jpeg;base64,' + this.produit.imagePrincipal.picByte;
                this.produit.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            }, error => console.log(error));
    }


    voirAussi() {
        console.log('this link : '+this.linkId)
        this.materielBioService.voirAussi(this.linkId).subscribe(
            data => {
                data.forEach(e=>{
                    let objectURL = 'data:image/jpeg;base64,' + e.imagePrincipal.picByte;
                    e.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
                    console.log('e = '+e);
                });
                this.produitBios = data;
            }, error => console.log(error))

    }


    back() {
        this.location.back();
    }

    check(produit: ProduitBio) {
        // let nom = this.produit.nom;
        this.commande.produitBio.nom = produit.nom;
        this.commandeService.save().subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/client/chekout']);
            }
            ,error => console.log(error)
        )
    }

    redirect(id: number) {
        this.router.navigate(['/client/produit-bio/'+id]);
    }

    get commande(): Commande {
        return this.commandeService.commande;
    }

    set commande(value: Commande) {
        this.commandeService.commande = value;
    }
}
