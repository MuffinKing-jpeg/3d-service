import {Component} from '@angular/core';
import ContactsJson from '../../../config/contacts.json';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent {
  protected readonly ContactsJson = ContactsJson;
}
