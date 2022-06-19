import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.css']
})
export class ClientNotificationComponent implements OnInit {
  user = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.online();
  }

  online(){
    this.userService.currentUser().subscribe(
        data => {
          this.user = data;
          console.log('current user'+data);
        },error => console.log(error)

    )
  }

}
