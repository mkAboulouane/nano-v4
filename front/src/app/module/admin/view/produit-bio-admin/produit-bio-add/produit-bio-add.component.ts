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
import {Produit} from "../../../../../controller/model/produit.model";


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
  produit = new Produit();

  public error: string = null;

  constructor(private materielBioService: MaterielBioService, private router: Router
      , private authService :AuthService , private imageService: ImageService
              ,private sanitizer: DomSanitizer , private http: HttpClient) { }

  ngOnInit(): void {
  }

    onImageUpload(event) {
      this.file = event.target.files[0];
    }

   async upload() {
      // debugger;
        const file = new FormData();
        file.append('file', this.file, this.file.name);
        await this.http.post<number>(this.API , file)
            .subscribe(data => {
                console.log(data);
                if (data > 0) {
                    console.log('image saved');
                    this.selectedProduitBio.id = data;
                    this.save();
                }
                else {
                    console.log('already exist')
                }
                // this.prepare(this.id);
            });
    }

   async save(){
      this.materielBioService.save().subscribe(
          data => {
              if(data == -1){
                  console.log('product deja exist');
              }else if( data == -2){
                  console.log('image does not exist');
              }else if( data > 0 ){
                  console.log('saved');
              }else {
                  console.log('error out of range');
              }
          },error1 => console.log(error1));
    }


    // save(){
    //   this.materielBioService.save( data => {
    //     const file = new FormData();
    //     file.append('file', this.file, this.file.name);
    //
    //   })
    // }



  // saveAfterUpload(name: string){
  //     this.materielBioService.saveDepanage(name).subscribe(
  //         data => {
  //           console.log('on succes : '+data);
  //         }, error1 => {
  //           console.log('on error : '+error1);
  //         }
  //     )
  // }




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
