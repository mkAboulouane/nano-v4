import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {ProduitBioComponent} from './module/client/view/produit-bio/produit-bio.component';
import {FormationComponent} from "./module/client/view/formation/formation.component";
import {CongresComponent} from "./module/client/view/congres/congres.component";
import {AuthGuard} from './controller/guards/auth.guard';
import {AccessDeniedComponent} from './auth/access-denied/access-denied.component';
import {PanierComponent} from "./module/client/view/panier/panier.component";
import {OverseaseducationComponent} from "./module/client/view/overseaseducation/overseaseducation.component";
import {HomeAdminComponent} from "./module/admin/home-admin.component";
import {HomeVisiteurComponent} from "./module/visiteur/home-visiteur/home-visiteur.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(
            [

                {
                    path: '',
                    component: HomeVisiteurComponent,
                    children: [

                        {path: '', redirectTo: 'login', pathMatch: 'full'},
                        {path: 'home', redirectTo: 'login', pathMatch: 'full'},
                        // {path: 'home', component: ComponentsComponent},
                        {path: 'formation', component: FormationComponent},
                        // {path: 'formation', component: FormationAddComponent},
                        // {path: 'formation-list', component: FormationListComponent},
                        {path: 'congres', component: CongresComponent},
                        {path: 'produitbio', component: ProduitBioComponent},
                        {path: 'overseaseducation', component: OverseaseducationComponent},
                        {path: 'panier', component: PanierComponent},
                        {path: 'login', component: LoginPageComponent},
                        {path: 'register', component: RegisterComponent},
                    ]
                },

                {
                    path: '',
                    children: [
                        {
                            path: 'admin',
                            component: HomeAdminComponent,
                            loadChildren: './module/admin/admin.routing.module#AdminRoutingModule',
                            canActivate: [AuthGuard],
                        }, {
                            path: 'gerant',
                            loadChildren: './module/agent/agent.routing.module#AgentRoutingModule',
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'user',
                            loadChildren: './module/client/client.routing.module#ClientRoutingModule',
                            canActivate: [AuthGuard],
                        },
                        {path: '**', component: AccessDeniedComponent},
                    ],
                    canActivate: [AuthGuard]
                },

            ],
            {scrollPositionRestoration: 'enabled'}
        )
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
