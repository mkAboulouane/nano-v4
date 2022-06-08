import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-notification',
  template: `
    <div class="modal-header" >
      <h4 class="modal-title" style="font-family: Arial; position: initial;" >Envoyer un Message a {{name}}</h4>
<!--      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>-->
    </div>
    
    <div class="modal-body">
      <p>Bonjour, {{user}}!</p>
      
      
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" (click)="activeModal.close('Close click')">Close</button>
      <button type="button" class="btn btn-outline-primary" (click)="activeModal.close('Close click')">Envoyer</button>
    </div>
  `,
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit {
  @Input() user;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
