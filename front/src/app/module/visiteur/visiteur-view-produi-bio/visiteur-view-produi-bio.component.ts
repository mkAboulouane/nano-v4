import {Component, OnInit} from '@angular/core';
import {MaterielBioService} from "../../../controller/service/Materiel-bio.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitBio} from "../../../controller/model/produit-bio.model";

@Component({
  selector: 'app-visiteur-view-produi-bio',
  templateUrl: './visiteur-view-produi-bio.component.html',
  styleUrls: ['./visiteur-view-produi-bio.component.css']
})
export class VisiteurViewProduiBioComponent implements OnInit {

  constructor(private materielBioService: MaterielBioService
      , private router: Router, private activatedRoute: ActivatedRoute) {
  }

  produit: ProduitBio;
  linkId: number;


  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.linkId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.materielBioService.findById(this.linkId).subscribe(
        data => {
          this.produit = data;
          console.log(data);
        }, error => console.log(error));
  }
}
