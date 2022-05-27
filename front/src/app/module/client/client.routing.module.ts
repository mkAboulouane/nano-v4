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


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {path: 'formation', component: FormationComponent, canActivate: [AuthGuard]},
                {path: 'formation-add', component: FormationAddComponent, canActivate: [AuthGuard]},
                {path: 'formation-edit', component: FormationEditComponent, canActivate: [AuthGuard]},
                {path: 'produit-bio', component: ProduitBioAdminComponent, canActivate: [AuthGuard]},
                {path: 'produit-bio-add', component: ProduitBioAddComponent, canActivate: [AuthGuard]},
                {path: 'produit-bio-edit', component: ProduitBioEditComponent, canActivate: [AuthGuard]},
                {path: 'congres', component: CongresAdminComponent, canActivate: [AuthGuard]},
                {path: 'congres-add', component: CongresAddComponent, canActivate: [AuthGuard]},
                {path: 'congres-edit', component: CongresEditComponent, canActivate: [AuthGuard]},
                {path: 'user', component: UserAdminComponent, canActivate: [AuthGuard]},
                {path: 'gerant', component: GerantAdminComponent, canActivate: [AuthGuard]},
                {path: 'gerant-add', component: GerantAddComponent, canActivate: [AuthGuard]},
                {path: 'commandes', component: CommandeAdminComponent, canActivate: [AuthGuard]},
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ClientRoutingModule {
}
