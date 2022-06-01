import {Component, OnInit} from '@angular/core';
import {Panier} from "../../../../../controller/model/panier.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment.prod";
import {CommandeService} from "../../../../../controller/service/Commande.service";

@Component({
    selector: 'app-commande-list',
    templateUrl: './commande-list.component.html',
    styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
    paniers: Panier[];
    crud: Panier[];
    searchBar: string;


    constructor(private http: HttpClient, private commandeService: CommandeService) {
    }

    ngOnInit(): void {
        this.findAll();
    }


    findAll(){
        this.commandeService.findAll().subscribe( data => {
            this.paniers = data;
            this.crud = data;
            console.log(data);
        },error => {
            console.log(error);
        });
    }


    searchAll(searchVal: string) {
        this.paniers = this.crud;
        let searchPaniers: Panier[] = [];
        if(searchVal && searchVal != '') {
            for (let panier of this.paniers) {
                if (panier.dateAjout.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.phone.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.user.username.toLowerCase().search(searchVal.toLowerCase()) != -1
                ){
                        searchPaniers.push(panier);
                }
            }
            console.log(searchPaniers);
            this.paniers = searchPaniers.slice();
        }
    }
}
