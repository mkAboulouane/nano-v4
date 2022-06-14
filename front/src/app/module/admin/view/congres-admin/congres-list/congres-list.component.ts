import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Congres} from "../../../../../controller/model/congres.model";
import {CongresService} from "../../../../../controller/service/Congres.service";

// import {congreBio} from "../../../../../controller/model/congre-bio.model";

@Component({
  selector: 'app-congres-list',
  templateUrl: './congres-list.component.html',
  styleUrls: ['./congres-list.component.css']
})
export class CongresListComponent implements OnInit {

  crud: Congres[];
  searchInput: string;
  private _congres : Array<Congres>;
  private _selectedCongre: Congres;

  constructor(private congresService: CongresService , private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  search(index: string) {
    this.congres = this.crud;
    let serchcongre: Congres[] = [];
    if (index && index != '') {
      for (let congre of this.congres) {
        if (congre.nom.toLowerCase().search(index.toLowerCase()) != -1
            || congre.description.toLowerCase().search(index.toLowerCase()) != -1
            || congre.duree.toLowerCase().search(index.toLowerCase()) != -1
            // || congre.addedAt.toLowerCase().search(index.toLowerCase()) != -1
            // || congre.prix.toString().search(index.toLowerCase()) != -1
        ) {
          serchcongre.push(congre);
        }
      }
      console.log(serchcongre);
      this.congres = serchcongre.slice();
    }
  }
  public findAll(){
    this.congresService.findAll().subscribe(data =>{
      this.congres = data;
      this.crud = data;
      console.log(data);
    })
  }


  add() {
    if(this.router.url.search('admin') > -1)
    this.router.navigate(['/admin/congres-add'])
    else
      this.router.navigate(['/gerant/congres-add'])
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
