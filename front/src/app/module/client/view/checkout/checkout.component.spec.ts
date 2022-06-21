import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckoutComponent} from './checkout.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

// beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [ CheckoutComponent ],
//         schemas: [NO_ERRORS_SCHEMA]
//     })
//         .compileComponents();
// }));


describe('CheckoutComponent', () => {
    let component: CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckoutComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
