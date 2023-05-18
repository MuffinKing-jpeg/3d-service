import {Component} from '@angular/core';
import ContactsJson from '../../../config/contacts.json';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss'],
})
export class NewApplicationComponent {
  contactsList = ContactsJson;
}
