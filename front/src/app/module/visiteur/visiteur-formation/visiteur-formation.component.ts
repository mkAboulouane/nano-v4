import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../controller/service/Formation.service";
import {Formation} from "../../../controller/model/formation.model";

@Component({
  selector: 'app-visiteur-formation',
  templateUrl: './visiteur-formation.component.html',
  styleUrls: ['./visiteur-formation.component.css']
})
export class VisiteurFormationComponent implements OnInit {
  formations: Formation[];
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
  this.formationService.findAll().subscribe(data => this.formations = data);
  }

}
