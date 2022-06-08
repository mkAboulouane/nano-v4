import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../../../../controller/model/User.model";
import {NotificationService} from "../../../../../controller/service/notification.service";
import {Notification} from "../../../../../controller/model/notification.model";

@Component({
    selector: 'app-add-notification',
    template: `
        <div class="modal-header">
            <h4 class="modal-title">Envoyer un Message
                a : <strong>{{user.username}}</strong></h4>
        </div>

        <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <label for="exampleFormControlInput1" class="form-label">Message</label>
                <input type="email" class="form-control" [(ngModel)]="selectedNotification.message" id="exampleFormControlInput1">
              </div>              
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Status</label>
                <select class="form-select" [(ngModel)]="selectedNotification.status" aria-label="Default select example">
                  <option value="Notification">Notification</option>
                  <option value="Ads">Ads</option>
                  <option value="Evenement">Evenement</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Info">Info</option>
                  <option value="Promotion">Promotion</option>
                </select>
              </div>

            </div>
        </div>
        <br>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" (click)="activeModal.close('Close click')">Close
            </button>
            <button type="button" class="btn btn-outline-primary" (click)="send(selectedNotification.message,selectedNotification.status,user.id)">Envoyer</button>
        </div>
    `,
    styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
    @Input() user: User;
    @Input() name;
    private notification: Notification;

    constructor(public activeModal: NgbActiveModal, private notificationService: NotificationService) {
    }

    ngOnInit(): void {
    }

    send(message: string, status: string, id: number) {
      this.notificationService.saveOrigin(message,id,status).subscribe(
          data => {
            console.log(data);
          },error => console.log(error)
      );
      this.activeModal.close('Close click')
    }

    get selectedNotification(): Notification {
      return this.notificationService.selectedNotification;
    }
}
