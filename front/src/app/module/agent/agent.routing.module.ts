// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../controller/guards/auth.guard';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
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
})
export class AgentRoutingModule {
}
