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


    constructor(private http: HttpClient, private commandeService: CommandeService) {
    }

    ngOnInit(): void {
        this.findAll();
    }


    findAll(){
        this.commandeService.findAll().subscribe( data => {
            this.paniers = data;
            console.log(data);
        },error => {
            console.log(error);
        });
    }










}
