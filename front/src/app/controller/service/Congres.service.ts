import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./User.service";
import {AuthService} from "./Auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Congres} from "../model/congres.model";

@Injectable({
  providedIn: 'root'
})
export class CongresService {

  private _congre: Congres;
  private _congres: Array<Congres>;
  private _selectedCongre: Congres;


  constructor(private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService) {
  }

  private API = environment.apiUrl + 'admin/congres';


  public findAll() {
    return this.http.get<Array<Congres>>(this.API + '/');
  }

  public delete(nom: string){
    return this.http.delete(this.API + '/' + nom);
  }

  public save(): Observable<Congres> {
    return this.http.post<Congres>(this.API + '/', this.selectedCongre);
  }

  public edit(): Observable<Congres> {
    return this.http.put<Congres>(this.API + '/', this.selectedCongre);
  }


  public findByName(name: string): Observable<Congres> {
    return this.http.get<Congres>(this.API + '/' + name);
  }


  /*  Getters and Setters  */


  get congre(): Congres {
    if (this._congre == null) {
      this._congre = new Congres();
    }
    return this._congre;
  }

  set congre(value: Congres) {
    this._congre = value;
  }

  get congres(): Array<Congres> {
    if (this._congres == null) {
      this._congres = new Array<Congres>();
    }
    return this._congres;
  }

  set congres(value: Array<Congres>) {
    this._congres = value;
  }

  get selectedCongre(): Congres {
    if (this._selectedCongre == null) {
      this._selectedCongre = new Congres();
    }
    return this._selectedCongre;
  }

  set selectedCongre(value: Congres) {
    this._selectedCongre = value;
  }
}
