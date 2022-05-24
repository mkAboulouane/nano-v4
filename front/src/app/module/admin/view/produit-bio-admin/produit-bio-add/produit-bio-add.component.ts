import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../controller/service/Auth.service";
import {RoleService} from "../../../../../controller/service/role.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpErrorResponse} from "@angular/common/http";
import {MaterielBioService} from "../../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";



@Component({
  selector: 'app-produit-bio-add',
  templateUrl: './produit-bio-add.component.html',
  styleUrls: ['./produit-bio-add.component.css']
})
export class ProduitBioAddComponent implements OnInit {

  test: any;


  title : any;
  public error: string = null;

  constructor(private materielBioService: MaterielBioService, private router: Router
      , private authService :AuthService , private roleService: RoleService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    console.log("Log Out Succesfully");
  }


  public async submit() {
    // const isPermistted = await this.roleService.isPermitted('Formation', 'add');
    // if(isPermistted) {
    this.materielBioService.save().subscribe(data => {
      console.log(data);
      this.produitBios.push({...data});
      this.selectedProduitBio = new ProduitBio();
      this.router.navigate(['/admin/produit-bio']);
    }, (error: HttpErrorResponse) => {
      this.error = error.error;
      console.log(error);
    });
  }

  /*  Getters and Setters  */
  focus: boolean;
    focus1: boolean;
  get selectedProduitBio(): ProduitBio{
    return this.materielBioService.selectedproduitBio;
  }
  set selectedProduitBio(value: ProduitBio) {
    this.materielBioService.selectedproduitBio = value;
  }
  get produitBios(): Array<ProduitBio>{
    return this.materielBioService.produitBios;
  }

  set produitBios(value: Array<ProduitBio>){
    this.materielBioService.produitBios = value;
  }




}
