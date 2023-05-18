import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RedirectComponent} from './components/redirect/redirect.component';
import {RedirectGuard} from './redirect.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [RedirectGuard],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
