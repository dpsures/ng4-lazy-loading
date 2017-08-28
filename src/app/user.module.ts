import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { ProfileComponent } from "./user/profile.component";

const USER_MODULE_ROUTES : Routes = [
    {path : 'profile', component : UserComponent}
];

@NgModule({
    imports: [ 
        CommonModule,RouterModule.forChild(USER_MODULE_ROUTES)
     ],
    declarations: [
        UserComponent, ProfileComponent
    ]
})
export class UserModuleRoutings {}