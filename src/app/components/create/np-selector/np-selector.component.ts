import {Component, OnInit, Output} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BehaviorSubject, debounce, interval, map, Observable, Observer, of, switchMap, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';
import {NpResponseInterface} from '../../../interfaces/npResponse.interface';

@Component({
  selector: 'app-np-selector',
  templateUrl: './np-selector.component.html',
  styleUrls: ['./np-selector.component.scss'],
})
export class NpSelectorComponent implements OnInit {
  citySearch?: string;
  depotSearch?: string;
  selectedCity?: string;
  citySuggestions$?: Observable<any>;
  depotSuggestions$?: Observable<any>;
  errorMessage?: string;

  public chosenAddress = new BehaviorSubject('');

    @Output()
      newAddress = new Observable((subscriber) => {
        this.chosenAddress.subscribe({
          next: (v) => subscriber.next(v),
        });
      });

    constructor(
        public modalService: BsModalService,
        private http: HttpClient
    ) {

    }

    selectCity = (e: TypeaheadMatch) => {
      this.selectedCity = e.item.DeliveryCity;
    };

    selectDepot = (e: TypeaheadMatch) => {
      this.chosenAddress.next(e.item);
      this.close();
    };

    ngOnInit() {
      this.citySuggestions$ = new Observable((observer: Observer<string | undefined>) => {
        observer.next(this.citySearch);
      }).pipe(
          debounce(() => interval(500)),
          switchMap((query: string) => {
            if (query) {
              return this.http.post<NpResponseInterface>(
                  'https://api.novaposhta.ua/v2.0/json/', {
                    'modelName': 'Address',
                    'calledMethod': 'searchSettlements',
                    'methodProperties': {
                      'CityName': query,
                      'Limit': '5',
                      'Page': '1',
                    },
                  })
                  .pipe(
                      map((data: NpResponseInterface) => data.data[0] && data.data[0]['Addresses'] && data.data[0]['Addresses'] || []),
                      tap({
                        error: (err) => {
                          this.errorMessage = err && err.messages || 'Шось посіпалось';
                        },
                      })
                  );
            }

            return of([]);
          })
      );
      this.depotSuggestions$ = new Observable((observer: Observer<string | undefined>) => {
        observer.next(this.depotSearch);
      }).pipe(
          debounce(() => interval(500)),
          switchMap((query: string) => {
            if (query) {
              return this.http.post<NpResponseInterface>(
                  'https://api.novaposhta.ua/v2.0/json/', {
                    'modelName': 'Address',
                    'calledMethod': 'getWarehouses',
                    'methodProperties': {
                      'CityRef': this.selectedCity,
                      'WarehouseId': query,
                    },
                  })
                  .pipe(
                      map((data: NpResponseInterface) => data.data[0] && [data.data[0]] || []),
                      tap({
                        error: (err) => {
                          this.errorMessage = err && err.messages || 'Шось посіпалось';
                        },
                      })
                  );
            }
            return of([]);
          })
      );
    }

    close = () => {
      this.modalService?.hide();
    };
}
