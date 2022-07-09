import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../controller/model/User.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../../../../controller/service/User.service";
import {UserListComponent} from "../user-list/user-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-block-user',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Vous Etes Sur de bloquer: <strong>{{user.username}}</strong></h4>
      
    </div>

    <div class="modal-footer">
        
      <button type="button" class="mr-5 col-md-6 btn btn-outline-primary" (click)="activeModal.close('Close click')">Annuler</button>
      <button type="button"  *ngIf="user.enabled" class="col-md-4 btn btn-outline-danger" (click)="bloquer(user)">Bloquer</button>
      <button type="button"  *ngIf="!user.enabled" class="col-md-4 btn btn-outline-danger" (click)="bloquer(user)">Debloquer</button>
    </div>
  `,
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {
  @Input() user: User;


  constructor(public activeModal: NgbActiveModal, private router: Router
              , private userService: UserService) { }

  ngOnInit(): void {
  }

  bloquer(user: User) {
    this.userService.blockUnblock(user.username);
    this.activeModal.close('Close click');
    this.user.enabled = !this.user.enabled;
  }
}
