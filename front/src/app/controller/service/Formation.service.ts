import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Formation} from "../model/formation.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ProduitBio} from "../model/produit-bio.model";
import {AuthService} from "./Auth.service";
import {UserService} from "./User.service";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private _formation: Formation;
  private _formations: Array<Formation> ;
  private _selectedformation: Formation;

  private _selectedProduitBio: ProduitBio;

  constructor(private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService) { }
  private API = environment.apiUrl + this.userService.user.username + '/formation';


  // public findAll(){
  //   return this.http.get<Array<Formation>>(this.API + '/');
  // }



  // public save(): Observable<ProduitBio> {
  //   return this.http.post<ProduitBio>(this.API  + '/' ,this.selectedProduitBio);
  // }

  public save(): Observable<Formation> {
    return this.http.post<Formation>(this.API  + '/' ,this.selectedformation);
  }

  // public edit(): Observable<Formation> {
  //   return this.http.put<Formation>(this.API + '/', this.selectedformation);
  // }
  //
  //
  // public findByName(name: string):Observable<Formation>{
  //   return this.http.get<Formation>(this.API + '/' + name);
  // }


  /*  Getters and Setters  */

  get formation(): Formation {
    if(this._formation == null ){
      this._formation = new Formation();
    }
    return this._formation;
  }

  set formation(value: Formation) {
    this._formation = value;
  }

  get selectedformation(): Formation {
    if(this._selectedformation == null ){
      this._selectedformation = new Formation();
    }
    return this._selectedformation;
  }

  set selectedformation(value: Formation) {
    this._selectedformation = value;
  }


  get formations(): Array<Formation> {
    if(this._formations == null ){
      this._formations = new Array<Formation>();
    }
    return this._formations;
  }

  set formations(value: Array<Formation>) {
    this._formations = value;
  }


  get selectedProduitBio(): ProduitBio {
    if (this._selectedProduitBio == null) {
      this._selectedProduitBio = new ProduitBio();
    }
    return this._selectedProduitBio;
  }

  set selectedProduitBio(value: ProduitBio) {
    this._selectedProduitBio = value;
  }
}
