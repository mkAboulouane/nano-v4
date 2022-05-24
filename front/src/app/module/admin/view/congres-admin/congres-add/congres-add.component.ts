import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../../controller/service/Auth.service";
import {RoleService} from "../../../../../controller/service/role.service";
import {Formation} from "../../../../../controller/model/formation.model";
import {HttpErrorResponse} from "@angular/common/http";
import {CongresService} from "../../../../../controller/service/Congres.service";
import {Congres} from "../../../../../controller/model/congres.model";

@Component({
  selector: 'app-congres-add',
  templateUrl: './congres-add.component.html',
  styleUrls: ['./congres-add.component.css']
})
export class CongresAddComponent implements OnInit {
  test: any;


  title : any;
  public error: string = null;

  constructor(private congresService: CongresService, private router: Router
      , private authService :AuthService , private roleService: RoleService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    console.log("Log Out Succesfully");
  }


  public async submit() {
    if (this.selectedCongre.nom == null) {
      window.alert('veuillez saisir l objectif');
    }else {
    this.congresService.save().subscribe(data => {
      console.log(data);
      this.congres.push({...data});
      this.selectedCongre = new Congres();
      this.router.navigate(['/admin/congres']);
    }, (error: HttpErrorResponse) => {
      this.error = error.error;
      console.log(error);
    });
    }
  }

  /*  Getters and Setters  */
  focus: boolean;
  get selectedCongre(): Congres{
    return this.congresService.selectedCongre;
  }
  set selectedCongre(value: Congres) {
    this.congresService.selectedCongre = value;
  }
  get congres(): Array<Congres>{
    return this.congresService.congres;
  }

  set congres(value: Array<Congres>){
    this.congresService.congres = value;
  }




}
