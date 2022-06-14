import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {Formation} from "../../../../../controller/model/formation.model";

@Component({
    selector: 'app-formation-list',
    templateUrl: './formation-list.component.html',
    styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
    constructor(private formationService: FormationService, private router: Router) {
    }
    crud: Formation[];
    searchInput: string;
    private _formations: Array<Formation>;

    get formations(): Array<Formation> {
        return this.formationService.formations;
    }

    set formations(value: Array<Formation>) {
        this.formationService.formations = value;
    }

    private _selectedFormation: Formation;

    get selectedFormation(): Formation {
        return this.formationService.selectedformation;
    }

    set selectedFormation(value: Formation) {
        this.formationService.selectedformation = value;
    }

    ngOnInit(): void {
        this.findAll();
    }

    public findAll() {
        this.formationService.findAll().subscribe(data => {
            this.formations = data;
            this.crud = data;
            console.log(data);
        })
    }

    add() {
        if(this.router.url.search('admin') > -1)
            this.router.navigate(['/admin/formation-add'])
        else
            this.router.navigate(['/gerant/formation-add'])
    }

    edit(formation: Formation) {
        this.formationService.selectedformation = formation;
        this.router.navigate(['/admin/formation-edit'])
        // this.formationService.edit().subscribe( data => {
        //     formation = this.selectedFormation;
        //
        // })
    }


    search(index: string) {
        this.formations = this.crud;
        let serchFormation: Formation[] = [];
        if (index && index != '') {
            for (let formation of this.formations) {
                if (formation.nom.toLowerCase().search(index.toLowerCase()) != -1
                    || formation.description.toLowerCase().search(index.toLowerCase()) != -1
                    || formation.encadrantProf.toLowerCase().search(index.toLowerCase()) != -1
                    || formation.prix.toString().search(index.toLowerCase()) != -1
                    || formation.nombrePlace.toString().search(index.toLowerCase()) != -1
                ) {
                    serchFormation.push(formation);
                }
            }
            console.log('index hahwa = '+index);
            console.log('formations : '+this.formations)
            console.log('search formation : '+ serchFormation)
            this.formations = serchFormation.slice();
        }
    }
    delete(formation: Formation) {
        var confirm = window.confirm("vous voulez vraiment suprimer cette formation ?")
        if (confirm) {
            this.formationService.delete(formation.nom).subscribe(
                data => {
                    console.log(data);
                    this.findAll();
                    console.log('deleted successfully');
                }
            )
        }
    }
}
