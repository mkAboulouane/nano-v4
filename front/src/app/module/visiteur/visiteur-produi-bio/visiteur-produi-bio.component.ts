import { Component, OnInit } from '@angular/core';
import {MaterielBioService} from "../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../controller/model/produit-bio.model";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-visiteur-produi-bio',
  templateUrl: './visiteur-produi-bio.component.html',
  styleUrls: ['./visiteur-produi-bio.component.css']
})
export class VisiteurProduiBioComponent implements OnInit {
  // produitBios: ProduitBio[];

  constructor(private materielBioService: MaterielBioService,
              private sanitizer: DomSanitizer, private http: HttpClient) {
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
      console.log('success: '+data);
    },error => {
      console.log('error: '+error);
    });
  }

  get produitBios(): Array<ProduitBio>{
    return this.materielBioService.produitBios;
  }

  set produitBios(value: Array<ProduitBio>){
    this.materielBioService.produitBios = value;
  }

}
