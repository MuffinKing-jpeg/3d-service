import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {MapComponentComponent} from './map-component.component';


@NgModule({
  declarations: [
    MapComponentComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [
    MapComponentComponent,
  ],
})
export class MapLoaderModule {
}
