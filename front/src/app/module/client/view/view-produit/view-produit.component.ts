import { Component, OnInit } from '@angular/core';
import {MaterielBioService} from "../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../controller/model/produit-bio.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit {

  constructor(private materielBioService: MaterielBioService
              , private router: Router
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
          console.log(data);
        },error => console.log(error));
  }
}
