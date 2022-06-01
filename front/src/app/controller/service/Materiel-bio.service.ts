import { Injectable } from '@angular/core';
import {Formation} from "../model/formation.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./User.service";
import {AuthService} from "./Auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ProduitBio} from "../model/produit-bio.model";

@Injectable({
  providedIn: 'root'
})
export class MaterielBioService {
  private _produitBio: ProduitBio;
  // private _materielBios: Array<MaterielBio>;
  private _produitBios: Array<ProduitBio>;
  private _selectedproduitBio: ProduitBio;


  constructor(private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService) {
  }

  private API = environment.apiUrl + 'admin/produit-bio';


  public findAll() {
    return this.http.get<Array<ProduitBio>>(this.API + '/');
  }

  public delete(nom: string){
    return this.http.delete(this.API + '/' + nom);
  }

  public save(): Observable<ProduitBio> {
    return this.http.post<ProduitBio>(this.API + '/', this._selectedproduitBio);
  }

  /*  Appellez cette methode apres l'enregistrement de l'image !!  */
  public saveDepanage(imageName: string): Observable<ProduitBio> {
    return this.http.post<ProduitBio>(this.API + '/save/' + encodeURIComponent(imageName) , this._selectedproduitBio);
  }



  public edit(): Observable<ProduitBio> {
    return this.http.put<ProduitBio>(this.API + '/', this._selectedproduitBio);
  }


  public findByName(name: string): Observable<ProduitBio> {
    return this.http.get<ProduitBio>(this.API + '/' + name);
  }


  /*  Getters and Setters  */

  get produitBio(): ProduitBio {
    if (this._produitBio == null) {
      this._produitBio = new ProduitBio();
    }
    return this._produitBio;
  }

  set produitBio(value: ProduitBio) {
    this._produitBio = value;
  }

  get selectedproduitBio(): ProduitBio {
    if (this._selectedproduitBio == null) {
      this._selectedproduitBio = new ProduitBio();
    }
    return this._selectedproduitBio;
  }

  set selectedproduitBio(value: ProduitBio) {
    this._selectedproduitBio = value;
  }


  get produitBios(): Array<ProduitBio> {
    if (this._produitBios == null) {
      this._produitBios = new Array<ProduitBio>();
    }
    return this._produitBios;
  }

  set produitBios(value: Array<ProduitBio>) {
    this._produitBios = value;
  }

}
