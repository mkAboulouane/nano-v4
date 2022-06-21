import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../controller/service/Formation.service";
import {Formation} from "../../../../controller/model/formation.model";
import {Router} from "@angular/router";
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";
import {AuthService} from "../../../../controller/service/Auth.service";
import {CommandeService} from "../../../../controller/service/Commande.service";
import {Panier} from "../../../../controller/model/panier.model";

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
     formations: Formation[] = [];
     user = new User();


    constructor(private formationService: FormationService, private userService: UserService,
                private router: Router , private authService: AuthService,
                private commandeService: CommandeService) {
    }

    ngOnInit(): void {
        this.findAll();
    }

    public findAll() {
        this.formationService.findAll().subscribe(
            data => {
                this.formations = data;
            },error => console.log(error)
        );
    }
    

    check() {
        this.router.navigate(['/client/chekout']);
    }

    add(formation: Formation) {
         this.panier.produitPanierItems = null;
         this.panier.formation = formation;
         this.commandeService.save().subscribe(
            data =>{
                console.log(data);
                this.check();
            },error => console.log(error)
        )

    }

    get panier(): Panier{
        return this.commandeService.panier;
    }
    set panier(value :Panier){
        this.commandeService.panier = value;
    }


    // get formations(): Array<Formation> {
    //     return this.formationService.formations;
    // }
    //
    // set formations(value: Array<Formation>) {
    //     this.formationService.formations = value;
    // }

}
