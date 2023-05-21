import {Component} from '@angular/core';
import ContactsJson from '../../../config/contacts.json';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent {
  isSuccess = window.history.state?.['postFormSuccess'];
  // isSuccess = false;
  errText = window.history.state?.['postFormResponse'];
  protected readonly ContactsJson = ContactsJson;
}
