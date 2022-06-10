import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../controller/model/User.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-view-user-detailt',
  template: `
        <div class="modal-header">
            <h4 class="modal-title">Details de : <strong>{{user.username}}</strong></h4>
        </div>

        <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.username" id="exampleFormControlInput1">
              </div>              
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.email" id="exampleFormControlInput1">
              </div> 
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Telephone</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.phone" id="exampleFormControlInput1">
              </div> 
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Date Jointe</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.createdAt" id="exampleFormControlInput1">
              </div>
              <br>
            <div class="col-md-4">
                <label class="form-label">Nom</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.nom" id="exampleFormControlInput1">
              </div>
            <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Prenom</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.prenom" id="exampleFormControlInput1">
              </div> 
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Adress</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.adress" id="exampleFormControlInput1">
              </div> <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label">Pays</label>
                <input type="text" class="form-control" [disabled]="true" [(ngModel)]="user.pays" id="exampleFormControlInput1">
              </div>
              <br>
             
              <div class="col-md-1 mt-4">
                <input style="size: 50px;" class="form-check-input" type="checkbox" [disabled]="true" [(ngModel)]="user.enabled" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Active &nbsp;&nbsp;&nbsp;</label>
              </div>
              <div class="col-md-3 mt-4">
                <input class="form-check-input" type="checkbox" [disabled]="true" [(ngModel)]="user.passwordChanged" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">MDP change ?</label>
              </div>
              
            </div>
        </div>
        <br>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="activeModal.close('Close click')">Close
          </button>
                  </div>
    `,  styleUrls: ['./view-user-detailt.component.css']
})
export class ViewUserDetailtComponent implements OnInit {
  @Input() user: User;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.user.createdAt = this.user.createdAt.toString().substring(0,16);
  }
}
