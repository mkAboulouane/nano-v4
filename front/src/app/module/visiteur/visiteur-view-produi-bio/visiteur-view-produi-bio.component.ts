import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../controller/service/Materiel-bio.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitBio} from "../../../controller/model/produit-bio.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Location} from "@angular/common";

@Component({
  selector: 'app-visiteur-view-produi-bio',
  templateUrl: './visiteur-view-produi-bio.component.html',
  styleUrls: ['./visiteur-view-produi-bio.component.css']
})
export class VisiteurViewProduiBioComponent implements OnInit {

  constructor(private materielBioService: MaterielBioService
      , private router: Router
      , private sanitizer: DomSanitizer
      , private location: Location
      , private activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  produit: ProduitBio;
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

  check() {
    this.router.navigate(['/login']);
  }

  redirect(id: number) {
    this.router.navigate(['/produit-bio/'+id]);
  }
}

