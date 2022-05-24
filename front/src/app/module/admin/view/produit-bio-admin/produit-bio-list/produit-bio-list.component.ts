import { Component, OnInit } from '@angular/core';
import {Formation} from "../../../../../controller/model/formation.model";
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";
import {MaterielBioService} from "../../../../../controller/service/Materiel-bio.service";

@Component({
  selector: 'app-produit-bio-list',
  templateUrl: './produit-bio-list.component.html',
  styleUrls: ['./produit-bio-list.component.css']
})
export class ProduitBioListComponent implements OnInit {

  private _produitBios : Array<ProduitBio>;
  private _selectedProduitBio: ProduitBio;

  constructor(private materielBioService: MaterielBioService , private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.materielBioService.findAll().subscribe(data =>{
      this.produitBios = data;
      console.log(data);
    })
  }


  add() {
    this.router.navigate(['/admin/produit-bio-add'])
  }

  edit(produitBio: ProduitBio) {
    this.selectedProduitBio = produitBio;
    this.router.navigate(['/admin/produit-bio-edit'])
  }

  delete(produitBio: ProduitBio) {
    this.materielBioService.delete(produitBio.nom).subscribe(
        data  =>  {
          console.log(data);
          this.findAll();
          console.log('deleted successfully');
        }
    )
  }


  get produitBios(): Array<ProduitBio> {
    return this.materielBioService.produitBios;
  }

  set produitBios(value: Array<ProduitBio>) {
    this.materielBioService.produitBios = value;
  }


  get selectedProduitBio(): ProduitBio {
    return this.materielBioService.selectedproduitBio;
  }

  set selectedProduitBio(value: ProduitBio) {
    this.materielBioService.selectedproduitBio = value;
  }
}
