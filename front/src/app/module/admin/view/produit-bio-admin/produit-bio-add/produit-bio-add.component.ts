import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../controller/service/Auth.service";
import {RoleService} from "../../../../../controller/service/role.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MaterielBioService} from "../../../../../controller/service/Materiel-bio.service";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";
import {ImageService} from "../../../../../controller/service/image.service";
import {DomSanitizer} from "@angular/platform-browser";
import {environment} from "../../../../../../environments/environment";



@Component({
  selector: 'app-produit-bio-add',
  templateUrl: './produit-bio-add.component.html',
  styleUrls: ['./produit-bio-add.component.css']
})
export class ProduitBioAddComponent implements OnInit {
  private API = environment.adminUrl + 'image/';
  test: any;
  title : any;
  file: File;
  imageName: string;

  public error: string = null;

  constructor(private materielBioService: MaterielBioService, private router: Router
      , private authService :AuthService , private imageService: ImageService
              ,private sanitizer: DomSanitizer , private http: HttpClient) { }

  ngOnInit(): void {
  }

    onImageUpload(event) {
      this.file = event.target.files[0];
    }

  imageUploadAction() {
      const file = new FormData();
      file.append('file', this.file, this.file.name);
      this.http.post(this.API , file , {responseType: 'text'} )
          .subscribe(data => {
            this.imageName = data;
            console.log(this.imageName);
          });
      if(this.imageName !== "le Nom de ce fichier deja exist"){
        this.saveAfterUpload(this.imageName);
      }else {
        console.log('error lors de test if/else');
      }
  }
  saveAfterUpload(name: string){
      this.materielBioService.saveDepanage(name).subscribe(
          data => {
            console.log(data);
          }, error1 => {
            console.log(error1);
          }
      )
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
