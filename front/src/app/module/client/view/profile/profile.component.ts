import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";
import {AuthService} from "../../../../controller/service/Auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private authServicer: AuthService) { }

  ngOnInit(): void {
    this.online();
  }

  update(user: User){
      this.userService.update(user);
  }



  online(){
    console.log('service auth : '+this.authServicer.user);
     this.userService.currentUser().subscribe(
         data => {
           this.user = data;
           console.log('current user'+data);
         },error => console.log(error)

     )
  }

}
