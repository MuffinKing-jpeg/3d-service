import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from "./welcome/welcome.component";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from './main-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {FloatingHeaderComponent} from './floating-header/floating-header.component';
import {PricingComponent} from './pricing/pricing.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NgxVisibilityModule} from "ngx-visibility";
import { NewApplicationComponent } from './new-application/new-application.component';


const routes: Routes = [
    {path: '', component: MainPageComponent}
]

@NgModule({
    declarations: [
        WelcomeComponent,
        MainPageComponent,
        AboutUsComponent,
        FloatingHeaderComponent,
        PricingComponent,
        ContactsComponent,
        NewApplicationComponent
    ],
    imports: [
        CommonModule,
        NgxVisibilityModule,
        RouterModule.forChild(routes)
    ]
})
export class MainPageModule {
}
