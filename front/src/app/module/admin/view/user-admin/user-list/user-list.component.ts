import {Component, OnInit} from '@angular/core';
import {User} from "../../../../../controller/model/User.model";
import {UserService} from "../../../../../controller/service/User.service";
import {Router} from "@angular/router";
import {Customer, Representative} from "./custumer";
import {CustomerService} from "./custumerservice";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    // cols: any[];
    //
    // constructor(private router: Router, private userService: UserService) {
    // }
    //
    // ngOnInit(): void {
    //     this.userService.findAll();
    //     this.users;
    //
    //     this.cols = [
    //         { field: 'vin', header: 'Vin' },
    //         { field: 'year', header: 'Year' },
    //         { field: 'brand', header: 'Brand' },
    //         { field: 'color', header: 'Color' }
    //     ];
    //
    // }
    //
    // delete(user: any) {
    //
    // }
    //
    // get users(): Array<User>{
    //     return this.userService.users;
    // }
    //
    // add() {
    //     this.router.navigate(['/add-user'])
    // }


    customers: Customer[];

    selectedCustomers: Customer[];

    representatives: Representative[];

    statuses: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers = customers;
            this.loading = false;

            // @ts-ignore
            this.customers.forEach(customer => customer.date = new Date(customer.date));
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "Xuxue Feng", image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
    }

}
