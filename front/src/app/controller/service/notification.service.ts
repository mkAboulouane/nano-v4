import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notification} from "../model/notification.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private API = environment.apiUrl + 'admin/notification';


  constructor(private http: HttpClient) { }

  deleteById(id: number){
   return this.http.delete(this.API + '/id/' + id);
  }

  findByReference(ref: string){
   return this.http.get<Notification>(this.API + '/reference/' + ref);
  }
   findById(id: number){
   return this.http.get<Notification>(this.API + '/id/' + id);
  }

  deleteByReference(ref: string){
   return this.http.delete(this.API + '/reference/' + ref);
  }

  findAll(){
    return this.http.get<Array<Notification>>(this.API + '/');
  }

  update(){
    return this.http.put(this.API + '/', this.selectedNotification);
  }

  save(){
    return this.http.post(this.API + '/', this.selectedNotification);
  }
  findByUserIdAndSeen(id: number, seen: boolean){
    return this.http.get<Array<Notification>>(this.API + '/seen/id/' + id + '/seen/' + seen);
  }

  findByUserId(id: number){
    return this.http.get<Array<Notification>>(this.API + '/user-id/' + id );
  }

  saveOrigin(message: string, id: number, status: string){
    return this.http.post(this.API + '/save/'+ message + '/user-id/' + id + '/status/' + status,null);
  }

  saveToEveryOne(message: string, status: string) {
    return this.http.post(this.API + '/to-all/message/'+ message + '/status/' + status,null);
  }

  findBySeen(status: string){
    return this.http.get<Array<Notification>>(this.API + '/status/' + status);
  }

  findByStatusAndUserId(status: string,id: number){
    return this.http.get<Array<Notification>>(this.API + '/status/' + status + '/user-id/' + id);
  }



  private _notification: Notification;
  private _selectedNotification: Notification;
  private _notifications: Array<Notification>;


  get selectedNotification(): Notification {
    if (this._selectedNotification == null) {
      this._selectedNotification = new Notification();
    }
    return this._selectedNotification;
  }

  set selectedNotification(value: Notification) {
    this._selectedNotification = value;
  }

  get notification(): Notification {
    if (this._notification == null) {
      this._notification = new Notification();
    }
    return this._notification;
  }

  set notification(value: Notification) {
    this._notification = value;
  }

  get notifications(): Array<Notification> {
    if (this._notifications == null) {
      this._notifications = new Array<Notification>();
    }
    return this._notifications;
  }

  set notifications(value: Array<Notification>) {
    this._notifications = value;
  }


}
