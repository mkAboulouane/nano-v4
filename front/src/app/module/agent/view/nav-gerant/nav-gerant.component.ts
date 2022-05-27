import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../controller/service/Auth.service";

@Component({
  selector: 'app-nav-gerant',
  templateUrl: './nav-gerant.component.html',
  styleUrls: ['./nav-gerant.component.css']
})
export class NavGerantComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sidebarToggle() {

  }

  logOut() {
    this.authService.logout();
    console.log("Log Out Succesfully");
  }
}
