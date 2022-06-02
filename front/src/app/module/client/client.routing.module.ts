// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import {PanierComponent} from './view/panier/panier.component';
import {CheckoutComponent} from './view/checkout/checkout.component';
import {OverseaseducationComponent} from './view/overseaseducation/overseaseducation.component';
import {ProduitBioComponent} from "./view/produit-bio/produit-bio.component";
import {FormationAdminComponent} from "../admin/view/formation-admin/formation-admin.component";
import {FormationAddComponent} from "../admin/view/formation-admin/formation-add/formation-add.component";
import {FormationEditComponent} from "../admin/view/formation-admin/formation-edit/formation-edit.component";
import {ProduitBioAdminComponent} from "../admin/view/produit-bio-admin/produit-bio-admin.component";
import {ProduitBioAddComponent} from "../admin/view/produit-bio-admin/produit-bio-add/produit-bio-add.component";
import {ProduitBioEditComponent} from "../admin/view/produit-bio-admin/produit-bio-edit/produit-bio-edit.component";
import {CongresAdminComponent} from "../admin/view/congres-admin/congres-admin.component";
import {CongresAddComponent} from "../admin/view/congres-admin/congres-add/congres-add.component";
import {CongresEditComponent} from "../admin/view/congres-admin/congres-edit/congres-edit.component";
import {UserAdminComponent} from "../admin/view/user-admin/user-admin.component";
import {GerantAdminComponent} from "../admin/view/gerant-admin/gerant-admin.component";
import {GerantAddComponent} from "../admin/view/gerant-admin/gerant-add/gerant-add.component";
import {CommandeAdminComponent} from "../admin/view/commande-admin/commande-admin.component";
import {FormationComponent} from "./view/formation/formation.component";
import { HomeClientComponent } from './view/home-client.component';
import { NavClientComponent } from './view/nav-client/nav-client.component';
import {AppModule} from "../../app.module";
import {CongresComponent} from "./view/congres/congres.component";
import { ClientCommandeComponent } from './view/client-commande/client-commande.component';
import { ClientPanierComponent } from './view/client-panier/client-panier.component';
import {ComponentsComponent} from "../../components/components.component";
import { ClientNotificationComponent } from './view/client-notification/client-notification.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ViewFormationComponent } from './view/view-formation/view-formation.component';
import { ViewProduitBioComponent } from './view/view-produit-bio/view-produit-bio.component';
import { ViewProduitComponent } from './view/view-produit/view-produit.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {path: 'home', component: ComponentsComponent, canActivate: [AuthGuard]},
                {path: 'portrait', component: ProfileComponent, canActivate: [AuthGuard]},
                {path: 'produit-bio', component: ProduitBioComponent, canActivate: [AuthGuard]},
                {path: 'produit-bio/:id', component: ViewProduitComponent, canActivate: [AuthGuard]},

                {path: 'formation', component: FormationComponent, canActivate: [AuthGuard]},
                {path: 'formation/:id', component: ViewFormationComponent, canActivate: [AuthGuard]},
                {path: 'congres', component: CongresComponent, canActivate: [AuthGuard]},
                {path: 'commande', component: ClientCommandeComponent, canActivate: [AuthGuard]},
                {path: 'panier', component: ClientPanierComponent, canActivate: [AuthGuard]},
                {path: 'notification', component: ClientNotificationComponent, canActivate: [AuthGuard]},
                {path: 'chekout', component: CheckoutComponent, canActivate: [AuthGuard]},
            ]
        ),
    ],
    exports: [RouterModule],
    declarations: [ViewProduitComponent],
})
export class ClientRoutingModule {
}
