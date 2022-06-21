import {Component, OnInit} from '@angular/core';
import {Panier} from "../../../../../controller/model/panier.model";
import {HttpClient} from "@angular/common/http";
import {CommandeService} from "../../../../../controller/service/Commande.service";
import {Commande} from "../../../../../controller/model/commande.model";

@Component({
    selector: 'app-commande-list',
    templateUrl: './commande-list.component.html',
    styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
    paniers: Commande[] = [];
    crud: Commande[] = [];
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


    search(searchVal: string) {
        this.paniers = this.crud;
        let searchPaniers: Commande[] = [];
        if(searchVal && searchVal != '') {
            for (let panier of this.paniers) {
                if (panier.reference.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.formation?.nom.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.produitBio?.nom.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.user.username.toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.addedAt.toString().toLowerCase().search(searchVal.toLowerCase()) != -1
                    || panier.total.toString().toLowerCase().search(searchVal.toLowerCase()) != -1
                ){
                        searchPaniers.push(panier);
                }
            }
            console.log(searchPaniers);
            this.paniers = searchPaniers.slice();
        }
    }
}
