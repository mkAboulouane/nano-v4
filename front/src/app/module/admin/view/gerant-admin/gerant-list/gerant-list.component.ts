import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../controller/service/User.service";
import {Router} from "@angular/router";
import {User} from "../../../../../controller/model/User.model";
import {FormationService} from "../../../../../controller/service/Formation.service";

@Component({
    selector: 'app-gerant-list',
    templateUrl: './gerant-list.component.html',
    styleUrls: ['./gerant-list.component.css']
})
export class GerantListComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
    }

    // delete(user: User) {
    //     var confirm = window.confirm("vous voulez vraiment suprimer  ?")
    //     if (confirm) {
    //         this.userService.delete(user.nom).subscribe(
    //             data => {
    //                 console.log(data);
    //                 this.findAll();
    //                 console.log('deleted successfully');
    //             }
    //         )
    //     }
    // }
    //
    // edit(user: User) {
    //     this.userService.selectedUser = user;
    //     this.router.navigate(['/admin/gerant-edit'])
    //     // this.formationService.edit().subscribe( data => {
    //     //     formation = this.selectedFormation;
    //     //
    //     // })
    // }
    add() {
        this.router.navigate(['/admin/gerant-add'])

    }
}




//
// constructor(private userService: UserService, private router: Router) {
// }
//
// private _users: Array<User>;
//
// get users(): Array<User >{
//     return this.userService.users;
// }
//
// set users(value: Array<User>) {
//     this.userService.users = value;
// }
//
// private _selectedUser: User;
//
// get selectedUser(): User {
//     return this.userService.selectedUser;
// }
//
// set selectedUser(value: User) {
//     this.userService.selectedUser = value;
// }
//
// ngOnInit(): void {
//     this.findAll();
// }
//
// public findAll() {
//     this.userService.findAll().subscribe(data => {
//         this.users= data;
//         console.log(data);
//     })
// }
//
// add() {
//     this.router.navigate(['/admin/gerant-add'])
// }
//
// edit(user: User) {
//     this.userService.selectedUser = user;
//     this.router.navigate(['/admin/gerant-edit'])
//     // this.formationService.edit().subscribe( data => {
//     //     formation = this.selectedFormation;
//     //
//     // })
// }
//
// delete(user: User) {
//     var confirm = window.confirm("vous voulez vraiment suprimer  ?")
//     if (confirm) {
//         this.userService.delete(user.nom).subscribe(
//             data => {
//                 console.log(data);
//                 this.findAll();
//                 console.log('deleted successfully');
//             }
//         )
//     }
// }
// }
