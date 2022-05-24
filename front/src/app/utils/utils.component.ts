import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-utils',
    template: '<br><br><br><br><br><br><br><br><br><br><br><input type="text" [(ngModel)]="test"> <h1>{{test}}</h1>',
    styleUrls: ['./utils.component.css']
})
export class UtilsComponent implements OnInit {

    test: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
