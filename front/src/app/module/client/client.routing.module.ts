// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import {CheckoutComponent} from './view/checkout/checkout.component';
import {ProduitBioComponent} from "./view/produit-bio/produit-bio.component";
import {FormationComponent} from "./view/formation/formation.component";
import {CongresComponent} from "./view/congres/congres.component";
import {ClientCommandeComponent} from './view/client-commande/client-commande.component';
import {ClientPanierComponent} from './view/client-panier/client-panier.component';
import {ComponentsComponent} from "../../components/components.component";
import {ClientNotificationComponent} from './view/client-notification/client-notification.component';
import {ProfileComponent} from './view/profile/profile.component';
import {ViewFormationComponent} from './view/view-formation/view-formation.component';
import {ViewProduitComponent} from './view/view-produit/view-produit.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";


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

        CommonModule
    ],
    exports: [RouterModule],
    // declarations: [],
})
export class ClientRoutingModule {
}
