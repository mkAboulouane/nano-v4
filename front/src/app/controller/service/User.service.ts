import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../model/User.model';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // declarations
    readonly API = environment.apiUrl;
    private _selectedUsers: User[] = [];
    private _selectedUser: User;
    private _users: Array<User>;
    private _notSeen = 0;


    constructor(private http: HttpClient) {
    }


    // methods
    findAll() {
        this.http.get<User[]>(this.API + 'admin/').subscribe(users => {
            this.users = users;
            console.log(users);
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        })
    }

    findAllGerant(): Observable<Array<User>>{
       return this.http.get<User[]>(this.API + 'admin/agent/')
    }

    save(user: User) {
        this.http.post<User>(this.API + 'save', user).subscribe(user => {
            this._users = [...this._users, user];
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        })
    }

    currentUser(): Observable<User>{
       return this.http.get<User>(this.API + 'admin/current-user/');
    }

    saveGerant(user: User) {
        this.http.post<User>(environment.adminUrl + 'agent/add/', this.selectedUser).subscribe(data => {
           console.log(data);
           this.selectedUser = new User();
           this.findAllGerant();
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        })
    }

    update(user: User) {
        this.http.put<User>(this.API, user).subscribe(user => {
            const index = this._users.findIndex(userToBeFound => user.id == userToBeFound.id);
            index > -1 ? this._users[index] = user : false;
            console.log("updated User")
            console.log(user)
            console.log("hiwa hiwa")
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        });
    }

    delete(id: number) {
        this.http.delete<number>(this.API + 'id/' + id).subscribe(res => {
            res == 1 ? this._users = this._users.filter(user => user.id != id) : false;
        })
    }



    // getters and setters
    get users(): Array<User> {
        if (this._users == null) {
            this._users = new Array<User>();
        }
        return this._users;
    }

    set users(users: Array<User>) {
        this._users = users;
    }


    get selectedUsers(): User[] {
        return this._users;
    }

    set selectedUsers(selectedUsers: User[]) {
        this._selectedUsers = selectedUsers;
    }

    private _userDialog: boolean = false;

    get userDialog(): boolean {
        return this._userDialog;
    }

    set userDialog(userDialog: boolean) {
        this._userDialog = userDialog;
    }

    private _user: User = new User();

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    private _submitted: boolean;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(submitted: boolean) {
        this._submitted = submitted;
    }


    get selectedUser(): User {
        if (this._selectedUser == null) {
            this._selectedUser = new User();
        }
        return this._selectedUser;
    }

    set selectedUser(value: User) {
        this._selectedUser = value;
    }

    get notSeen(): number {
        return this._notSeen;
    }

    set notSeen(value: number) {
        this._notSeen = value;
    }
}
