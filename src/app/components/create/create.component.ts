import {Component} from '@angular/core';
import ContactsJson from "../../config/contacts.json";
import Conf from '../../config/conf.json'

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    public isMenuCollapsed = true;
    public contactsList = ContactsJson
    public name = Conf.companyName;
}
