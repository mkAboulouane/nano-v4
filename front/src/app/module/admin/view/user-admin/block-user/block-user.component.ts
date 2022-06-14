import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../controller/model/User.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-block-user',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Bloquer : <strong>{{user.username}}</strong></h5>
    </div>

    <div class="modal-body">
      <div class="row">
     <div class="modal-title">   Vous Etes Sur de bloquer {{user.username}} ? </div>
      </div>
    </div>

    <div class="modal-footer">
      <div class="form-control">
        
      <button type="button" class="mr-5 col-md-6 btn btn-outline-primary" (click)="activeModal.close('Close click')">Annuler
      </button>
      <button type="button" class="col-md-4 btn btn-outline-danger" (click)="bloquer(user)">Bloquer</button>
      </div>
        <br>
    </div>
  `,
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {
  @Input() user: User;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  bloquer(user: User) {

  }
}
