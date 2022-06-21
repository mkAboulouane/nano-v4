import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Panier} from "../model/panier.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../model/commande.model";

@Injectable({
    providedIn: 'root'
})
export class CommandeService {

    private API = environment.apiUrl + '/commande';

    private _commandes: Commande[];
    private _commande: Commande;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Array<Commande>>{
       return this.http.get<Array<Commande>>( this.API + '/');
    }

    findByUser(): Observable<Array<Commande>>{
        return this.http.get<Array<Commande>>( this.API + '/user-id');
    }

    save(): Observable<Commande>{
        return this.http.post<Commande>(this.API + '/',this.commande);
    }

    delete(id: number): Observable<number>{
        return this.http.delete<number>(this.API + '/id/' + id);
    }


    get commandes(): Commande[] {
        if (this._commandes == null) {
            this._commandes = new Array<Commande>()
        }
        return this._commandes;
    }

    set commandes(value: Commande[]) {
        this._commandes = value;
    }

    get commande(): Commande {
        if (this._commande == null) {
            this._commande = new Commande();
        }
        return this._commande;
    }

    set commande(value: Commande) {
        this._commande = value;
    }
}
