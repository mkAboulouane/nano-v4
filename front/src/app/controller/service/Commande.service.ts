import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Panier} from "../model/panier.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommandeService {

    private API = environment.apiUrl + '/panier/';

    private _paniers: Panier[];
    private _panier: Panier;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Array<Panier>>{
       return this.http.get<Array<Panier>>(environment.adminUrl + 'panier/');
    }

    save(): Observable<Panier>{
        return this.http.post<Panier>(this.API,this.panier);
    }


    get paniers(): Panier[] {
        if (this._paniers == null) {
            this._paniers = new Array<Panier>();
        }
        return this._paniers;
    }

    set paniers(value: Panier[]) {
        this._paniers = value;
    }

    get panier(): Panier {
        if (this._panier == null) {
            this._panier = new Panier();
        }
        return this._panier;
    }

    set panier(value: Panier) {
        this._panier = value;
    }
}
