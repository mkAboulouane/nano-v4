import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProduitBio} from "../../../../../controller/model/produit-bio.model";
import {MaterielBioService} from "../../../../../controller/service/Materiel-bio.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-produit-bio-list',
  templateUrl: './produit-bio-list.component.html',
  styleUrls: ['./produit-bio-list.component.css']
})
export class ProduitBioListComponent implements OnInit {

  _produitBios: Array<ProduitBio>;
  _selectedProduitBio: ProduitBio;
  crud: ProduitBio[];
  searchInput: string;



  constructor(private sanitizer: DomSanitizer,private materielBioService: MaterielBioService, private router: Router) {
  }

  ngOnInit(): void {
    this.findAll();
  }



  search(index: string) {
    this.produitBios = this.crud;
    let serchProduitBio: ProduitBio[] = [];
    if (index && index != '') {
      for (let produit of this.produitBios) {
        if (produit.nom.toLowerCase().search(index.toLowerCase()) != -1
            || produit.description.toLowerCase().search(index.toLowerCase()) != -1
            || produit.addedAt.toLowerCase().search(index.toLowerCase()) != -1
            || produit.prix.toString().search(index.toLowerCase()) != -1
        ) {
          serchProduitBio.push(produit);
        }
      }
      console.log(serchProduitBio);
      this.produitBios = serchProduitBio.slice();
    }
  }


  public findAll() {
    this.materielBioService.findAll().subscribe(data => {
      data.forEach(e=>{
        let objectURL = 'data:image/jpeg;base64,' + e.imagePrincipal.picByte;
        e.imagePrincipal.picByte = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
      this.produitBios = data;
      this.crud = data;
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
        data => {
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
