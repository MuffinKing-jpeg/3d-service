import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NpDepotInterface} from '../../../interfaces/npDepot.interface';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss'],
})
export class MapComponentComponent implements OnChanges {
  public apiLoaded?: Observable<boolean>;

    @Input()
      depot!: NpDepotInterface | null;
    options: google.maps.MapOptions = {
      zoom: 16,
      disableDoubleClickZoom: true,
      disableDefaultUI: true,
      scrollwheel: false,
    };
    public mapCenter: google.maps.LatLngLiteral = {lat: 0, lng: 0};
    markerOptions: google.maps.MarkerOptions = {
      draggable: false,
      clickable: false,
    };
    markerPosition: google.maps.LatLngLiteral = {lat: 0, lng: 0};

    constructor(private httpClient: HttpClient) {
      this.loadMap();
    }

    loadMap() {
      this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAbZJCDGZ04JBx07ntatvmsqKzJd0SGW58', 'callback')
          .pipe(
              map(() => true),
              catchError(() => of(false)),
          );
    }

    mapUpdate() {
      if (this.depot) {
        this.mapCenter = {
          lat: +this.depot.Latitude,
          lng: +this.depot.Longitude,
        };
        this.markerPosition = {
          lat: +this.depot.Latitude,
          lng: +this.depot.Longitude,
        };
      }
    }


    ngOnChanges(changes: SimpleChanges) {
      this.mapUpdate();
    }
}
