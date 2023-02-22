import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {RedirectGuard} from "./redirect.guard";

@NgModule({
    declarations: [
        AppComponent,
        RedirectComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule

    ],
    providers: [RedirectGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
