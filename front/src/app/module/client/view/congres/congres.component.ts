import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../controller/service/Formation.service";
import {Formation} from "../../../../controller/model/formation.model";
import {CongresService} from "../../../../controller/service/Congres.service";
import {Congres} from "../../../../controller/model/congres.model";

@Component({
    selector: 'app-congres',
    templateUrl: './congres.component.html',
    styleUrls: ['./congres.component.scss']
})
export class CongresComponent implements OnInit {

    constructor(private congresService: CongresService) {
    }

    private _congres: Array<Congres>;

    get congres(): Array<Congres> {
        return this.congresService.congres;
    }

    set congres(value: Array<Congres>) {
        this.congresService.congres = value;
    }

    ngOnInit(): void {
        this.findAll();
    }

    public findAll() {
        this.congresService.findAll().subscribe(
            data => {
                this.congres = data;
            }
        )

    }
}
