import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Formation} from "../../../../../controller/model/formation.model";
import {FormationService} from "../../../../../controller/service/Formation.service";
import {Congres} from "../../../../../controller/model/congres.model";
import {CongresService} from "../../../../../controller/service/Congres.service";

@Component({
  selector: 'app-congres-list',
  templateUrl: './congres-list.component.html',
  styleUrls: ['./congres-list.component.css']
})
export class CongresListComponent implements OnInit {

  private _congres : Array<Congres>;
  private _selectedCongre: Congres;

  constructor(private congresService: CongresService , private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(){
    this.congresService.findAll().subscribe(data =>{
      this.congres = data;
      console.log(data);
    })
  }


  add() {
    this.router.navigate(['/admin/congres-add'])
  }

  edit(congres: Congres) {
    this.congresService.selectedCongre = congres;
    this.router.navigate(['/admin/congres-edit'])
    // this.formationService.edit().subscribe( data => {
    //     formation = this.selectedFormation;
    //
    // })
  }

  delete(congres: Congres) {
    this.congresService.delete(congres.nom).subscribe(
        data=>{
          console.log(data);
          this.findAll();
          console.log('deleted successfully');
        }
    )
  }


  get congres(): Array<Congres> {
    return this.congresService.congres;
  }

  set congres(value: Array<Congres>) {
    this.congresService.congres = value;
  }


  get selectedcongre(): Congres {
    return this.congresService.selectedCongre;
  }

  set selectedcongre(value: Congres) {
    this.congresService.selectedCongre = value;
  }
}
