import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommandeAdminComponent} from "./view/commande-admin/commande-admin.component";
import {FooterAdminComponent} from "./view/footer-admin/footer-admin.component";
import {AdminAcueilComponent} from "./view/admin-acueil/admin-acueil.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {ComponentsModule} from "../../components/components.module";
import {AppModule} from "../../app.module";


@NgModule({
    declarations: [
        CommandeAdminComponent,
        AdminAcueilComponent,
        FooterAdminComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        NgbCarouselModule,
        ComponentsModule,
        AppModule,
    ],
    exports: [
        CommandeAdminComponent,
    ],
    entryComponents: [],
})
export class AdminModule {
}
