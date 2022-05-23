import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-formation-edit',
    templateUrl: './formation-edit.component.html',
    styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit {

    constructor(private formationService: FormationService, private http: HttpClient, private router: Router) {
    }

    get selectedFormation(): Formation {
        return this.formationService.selectedformation;
    }

    set selectedFormation(value: Formation) {
        this.formationService.selectedformation = value;
    }

    ngOnInit(): void {
        this.formationService.selectedformation = this.selectedFormation;
    }

    edit() {
        this.formationService.edit().subscribe(
            data => {
                console.log(data);
                this.selectedFormation = new Formation();
                this.router.navigate(['admin/formation'])
            }
        )
    }
}
