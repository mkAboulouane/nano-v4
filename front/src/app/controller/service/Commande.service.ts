import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {Panier} from "../model/panier.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommandeService {

    private API = environment.adminUrl + 'panier/';

    paniers: Panier[];

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Array<Panier>>{
       return this.http.get<Array<Panier>>(this.API);
    }
}
