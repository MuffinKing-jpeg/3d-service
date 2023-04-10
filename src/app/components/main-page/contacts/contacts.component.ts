import {Component, Input} from '@angular/core';
import ContactsJson from '../../../config/contacts.json'

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
    @Input()
    flexDirection: 'column' | 'row' | 'column-reverse' | 'row-reverse' = 'column'

    contactsList = ContactsJson
}
