import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Location} from "@angular/common";

@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.scss']
})
export class ViewProduitComponent implements OnInit {

  constructor(private materielBioService: MaterielBioService
              , private router: Router
              , private sanitizer: DomSanitizer
              , private location: Location
              , private activatedRoute: ActivatedRoute) { }

  produit: ProduitBio;
  linkId: number;



  ngOnInit(): void {
    this.findById();
  }

  findById(){
    this.linkId = + this.activatedRoute.snapshot.paramMap.get('id');
    this.materielBioService.findById(this.linkId).subscribe(
        data=> {
          this.produit = data;
          let objectURL = 'data:image/jpeg;base64,' + this.produit.imagePrincipal.picByte;
          this.produit.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          console.log(data);
        },error => console.log(error));
  }

    back() {
        this.location.back();
    }

    check() {
        this.router.navigate(['/client/chekout']);
    }
}
