import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {CongresService} from "../../../../../controller/service/Congres.service";
import {Congres} from "../../../../../controller/model/congres.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-congres-edit',
    templateUrl: './congres-edit.component.html',
    styleUrls: ['./congres-edit.component.css']
})
export class CongresEditComponent implements OnInit {
    constructor(private congresService: CongresService, private http: HttpClient, private router: Router) {
    }

    get selectedCongre(): Congres {
        return this.congresService.selectedCongre;
    }

    set selectedCongre(value: Congres) {
        this.congresService.selectedCongre = value;
    }

    ngOnInit(): void {
        this.congresService.selectedCongre = this.selectedCongre;
    }

    edit() {
        this.congresService.edit().subscribe(
            data => {
                console.log(data);
                this.selectedCongre = new Congres();
                this.router.navigate(['admin/congres'])
            }
        )
    }
}
