import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const APP_MAIN_ROUTING : Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'user', loadChildren : './user.module#UserModuleRoutings'}
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_MAIN_ROUTING, {preloadingStrategy : PreloadAllModules}) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}