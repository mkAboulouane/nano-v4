import { Component, OnInit } from '@angular/core';
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Router} from "@angular/router";
import {Formation} from "../../../../../controller/model/formation.model";

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  private _formations : Array<Formation>;

  constructor(private formationService: FormationService , private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.formationService.findAll().subscribe(data =>{
      this.formations = data;
      console.log(data);
    })
  }


  get formations(): Array<Formation> {
    return this.formationService.formations;
  }

  set formations(value: Array<Formation>) {
    this.formationService.formations = value;
  }

  add() {
    this.router.navigate(['/admin/formation-add'])
  }
}
