import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './module/visiteur/shared/navbar/navbar.component';
import {FooterComponent} from './module/visiteur/shared/footer/footer.component';

import {ComponentsModule} from './components/components.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {FormationComponent} from './module/client/view/formation/formation.component';
import {ProduitBioComponent} from './module/client/view/produit-bio/produit-bio.component';
import {CongresComponent} from './module/client/view/congres/congres.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PanierComponent} from "./module/client/view/panier/panier.component";
import {UtilsComponent} from "./utils/utils.component";
import {FormationAdminComponent} from "./module/admin/view/formation-admin/formation-admin.component";
import {FormationAddComponent} from "./module/admin/view/formation-admin/formation-add/formation-add.component";
import {JwtInterceptor} from "./controller/interceptors/jwt.interceptor";
import {AdminRoutingModule} from "./module/admin/admin.routing.module";
import {AdminModule} from "./module/admin/admin.module";
import {HomeVisiteurComponent} from './module/visiteur/home-visiteur/home-visiteur.component';
import {AccessDeniedComponent} from "./auth/access-denied/access-denied.component";
import {UserService} from "./controller/service/User.service";
import {RoleService} from "./controller/service/role.service";
import {FormationListComponent} from "./module/admin/view/formation-admin/formation-list/formation-list.component";
import {FormationEditComponent} from "./module/admin/view/formation-admin/formation-edit/formation-edit.component";
import {CongresAddComponent} from "./module/admin/view/congres-admin/congres-add/congres-add.component";
import {CongresAdminComponent} from "./module/admin/view/congres-admin/congres-admin.component";
import {CommandeListComponent} from "./module/admin/view/commande-admin/commande-list/commande-list.component";
import {CongresListComponent} from "./module/admin/view/congres-admin/congres-list/congres-list.component";
import {ProduitBioAddComponent} from "./module/admin/view/produit-bio-admin/produit-bio-add/produit-bio-add.component";
import {ProduitBioListComponent} from "./module/admin/view/produit-bio-admin/produit-bio-list/produit-bio-list.component";
import {CongresEditComponent} from "./module/admin/view/congres-admin/congres-edit/congres-edit.component";
import {ProduitBioAdminComponent} from "./module/admin/view/produit-bio-admin/produit-bio-admin.component";
import {
    ProduitBioEditComponent
} from "./module/admin/view/produit-bio-admin/produit-bio-edit/produit-bio-edit.component";
import {GerantAdminComponent} from "./module/admin/view/gerant-admin/gerant-admin.component";
import {GerantAddComponent} from "./module/admin/view/gerant-admin/gerant-add/gerant-add.component";
import {NavGerantComponent} from "./module/agent/view/nav-gerant/nav-gerant.component";
import {HomeAgentComponent} from "./module/agent/home-agent.component";


@NgModule({
    declarations: [
        FormationAdminComponent,
        FormationAddComponent,
        ProduitBioEditComponent,
        ProduitBioAdminComponent,
        ProduitBioAddComponent,
        GerantAdminComponent,
        NavGerantComponent,
        HomeAgentComponent,
        GerantAddComponent,
        CongresAddComponent,
        CongresEditComponent,
        CongresAdminComponent,
        FormationEditComponent,
        FormationListComponent,
        UtilsComponent,
        PanierComponent,
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginPageComponent,
        RegisterComponent,
        FormationComponent,
        ProduitBioComponent,
        CongresComponent,
        HomeVisiteurComponent,
        AccessDeniedComponent,
        CommandeListComponent,
        CongresListComponent,
        ProduitBioAddComponent,
        ProduitBioListComponent

    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        AppRoutingModule,

        AdminModule,
        AdminRoutingModule,

    ],
    // exports: [],
    providers: [
        /*    { provide: LocationStrategy, useClass: HashLocationStrategy }, */
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        UserService,
        RoleService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
