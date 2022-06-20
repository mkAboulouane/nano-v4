import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../../controller/service/Formation.service";
import {Formation} from "../../../controller/model/formation.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visiteur-formation',
  templateUrl: './visiteur-formation.component.html',
  styleUrls: ['./visiteur-formation.component.css']
})
export class VisiteurFormationComponent implements OnInit {
  formations: Formation[];
  constructor(private formationService: FormationService,private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.formationService.findAll().subscribe(data => this.formations = data);
  }


  check(formation: Formation) {
    this.router.navigate(['/login']);
  }
}
