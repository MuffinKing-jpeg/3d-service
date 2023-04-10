import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {RedirectGuard} from "./redirect.guard";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        RedirectComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbCollapseModule
    ],
    providers: [RedirectGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
