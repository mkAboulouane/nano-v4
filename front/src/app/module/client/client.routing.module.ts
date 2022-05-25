// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';
import {PanierComponent} from './view/panier/panier.component';
import {CheckoutComponent} from './view/checkout/checkout.component';
import {OverseaseducationComponent} from './view/overseaseducation/overseaseducation.component';
import {ProduitBioComponent} from "./view/produit-bio/produit-bio.component";
import { NavbarClientComponent } from './view/navbar-client/navbar-client.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {path: 'produitbio', component: ProduitBioComponent},
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    // component: ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    // component:  ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
    declarations: [PanierComponent, CheckoutComponent, OverseaseducationComponent, NavbarClientComponent],
})
export class ClientRoutingModule {
}
