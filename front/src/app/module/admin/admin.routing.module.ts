import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from "../../controller/guards/auth.guard";
import {FormationAddComponent} from "./view/formation-admin/formation-add/formation-add.component";
import {CongresAddComponent} from "./view/congres-admin/congres-add/congres-add.component";
import {ProduitBioAddComponent} from "./view/produit-bio-admin/produit-bio-add/produit-bio-add.component";
import {UserAdminComponent} from "./view/user-admin/user-admin.component";
import {GerantAdminComponent} from "./view/gerant-admin/gerant-admin.component";
import {CommandeAdminComponent} from "./view/commande-admin/commande-admin.component";
import {ProduitBioAdminComponent} from "./view/produit-bio-admin/produit-bio-admin.component";
import {CongresAdminComponent} from "./view/congres-admin/congres-admin.component";
import {FormationAdminComponent} from "./view/formation-admin/formation-admin.component";
import {FormationEditComponent} from "./view/formation-admin/formation-edit/formation-edit.component";
import {CongresEditComponent} from "./view/congres-admin/congres-edit/congres-edit.component";
import {ProduitBioEditComponent} from "./view/produit-bio-admin/produit-bio-edit/produit-bio-edit.component";
import {GerantAddComponent} from "./view/gerant-admin/gerant-add/gerant-add.component";
import {ImageAdminComponent} from "./view/image-admin/image-admin.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                { path: 'home',  redirectTo:'commande', pathMatch: 'full'},
                { path: 'image-test', component: ImageAdminComponent, canActivate: [AuthGuard] },
                { path: 'formation', component: FormationAdminComponent, canActivate: [AuthGuard] },
                { path: 'formation-add', component: FormationAddComponent, canActivate: [AuthGuard] },
                { path: 'formation-edit', component: FormationEditComponent, canActivate: [AuthGuard] },
                { path: 'produit-bio', component: ProduitBioAdminComponent, canActivate: [AuthGuard] },
                { path: 'produit-bio-add', component: ProduitBioAddComponent, canActivate: [AuthGuard] },
                { path: 'produit-bio-edit', component: ProduitBioEditComponent, canActivate: [AuthGuard] },
                { path: 'congres', component: CongresAdminComponent, canActivate: [AuthGuard] },
                { path: 'congres-add', component: CongresAddComponent, canActivate: [AuthGuard] },
                { path: 'congres-edit', component: CongresEditComponent, canActivate: [AuthGuard] },
                { path: 'user', component: UserAdminComponent, canActivate: [AuthGuard] },
                { path: 'gerant', component: GerantAdminComponent, canActivate: [AuthGuard] },
                { path: 'gerant-add', component: GerantAddComponent, canActivate: [AuthGuard] },
                { path: 'commande', component: CommandeAdminComponent, canActivate: [AuthGuard] },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
