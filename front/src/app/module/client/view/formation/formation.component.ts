import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../controller/service/Formation.service";
import {Formation} from "../../../../controller/model/formation.model";

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
    constructor(private formationService: FormationService) {
    }

    private _formations: Array<Formation>;

    get formations(): Array<Formation> {
        return this.formationService.formations;
    }

    set formations(value: Array<Formation>) {
        this.formationService.formations = value;
    }

    ngOnInit(): void {
        this.findAll();
    }

    public findAll() {
        this.formationService.findAll().subscribe(
            data => {
                this.formations = data;
            }
        )

    }
}
