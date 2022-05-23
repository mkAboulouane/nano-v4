import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FormationAddComponent} from "./view/formation-admin/formation-add/formation-add.component";
import {FormationAdminComponent} from "./view/formation-admin/formation-admin.component";
import {CommandeAdminComponent} from "./view/commande-admin/commande-admin.component";
import {GerantAdminComponent} from "./view/gerant-admin/gerant-admin.component";
import {UserAdminComponent} from "./view/user-admin/user-admin.component";
import {HomeAdminComponent} from "./home-admin.component";
import {FooterAdminComponent} from "./view/footer-admin/footer-admin.component";
import {NavAdminComponent} from "./view/nav-admin/nav-admin.component";
import {AdminAcueilComponent} from "./view/admin-acueil/admin-acueil.component";
import {FormationEditComponent} from "./view/formation-admin/formation-edit/formation-edit.component";


@NgModule({
    declarations: [
        CommandeAdminComponent,
        // FormationEditComponent,
        AdminAcueilComponent,
        GerantAdminComponent,
        UserAdminComponent,
        HomeAdminComponent,
        FooterAdminComponent,
        NavAdminComponent
        // FormationAdminComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        CommandeAdminComponent,
        GerantAdminComponent,
        UserAdminComponent,
    ],
    entryComponents: [],
})
export class AdminModule { }
