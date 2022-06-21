import {Component, OnInit} from '@angular/core';
import {UserService} from "app/controller/service/User.service";
import {User} from "app/controller/model/User.model";
import {NotificationService} from "app/controller/service/notification.service";
import {Notification} from "app/controller/model/notification.model";

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.css']
})
export class ClientNotificationComponent implements OnInit {
  user = new User();
  key = 0;
  notifications: Notification[] = [];
  constructor(private userService: UserService, private notificationService: NotificationService) { }

  ngOnInit(): void {
      this.online();
      setInterval(e=>{
            this.notification(this.user.id)
      },5000)
  }

  update(){
      this.notificationService.update().subscribe(
          data=> console.log(data)
          , error => console.log(error)
      );
  }

   notSeen() {
      this.key = 0;
      this.notifications.forEach(e=>{
          if(!e.seen) this.key++;
      }) 
  }
    

  online(){
    this.userService.currentUser().subscribe(
        data => {
          this.user = data;
            console.log('current user '+data);
            this.notification(this.user.id);
        },error => console.log(error)

    )
  }

    notification(id: number){
        this.notificationService.findByUserId(id).subscribe(
            data => {
                this.notifications = data;
                this.notifications = this.notifications.reverse();
                this.notifications.forEach(e=>{
                   this.selectedNotification = e;
                   this.update();
                });
                this.notSeen();
                console.log(data);
            },error => console.log(error)
        )
    }

    get selectedNotification(): Notification {
      return this.notificationService.selectedNotification;
    }

    set selectedNotification(value: Notification){
      this.notificationService.selectedNotification = value;
    }




}
