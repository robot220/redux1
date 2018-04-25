import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
    {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

const routerConfig: any = {
    useHash: true,
};

if (!environment.production) {
    routerConfig.enableTracing = true;
}

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, routerConfig),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
