import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../controller/service/Formation.service";
import {Formation} from "../../../../controller/model/formation.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
     formations: Formation[] = [];


    constructor(private formationService: FormationService,
                private router: Router) {
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

    //
    // get formations(): Array<Formation> {
    //     return this.formationService.formations;
    // }
    //
    // set formations(value: Array<Formation>) {
    //     this.formationService.formations = value;
    // }

    check() {
        this.router.navigate(['/client/chekout']);
    }
}
