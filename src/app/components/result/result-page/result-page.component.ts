import {Component, OnInit} from '@angular/core';
import ContactsJson from '../../../config/contacts.json';
import Config from '../../../config/conf.json';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  isSuccess = window.history.state?.['postFormSuccess'];
  title = this.isSuccess ? Config.companyName + '| Успіх!' : Config.companyName + '| Біда';
  // isSuccess = false;
  errText = window.history.state?.['postFormResponse'];
  protected readonly ContactsJson = ContactsJson;
  protected readonly window = window;

  ngOnInit() {
    window.document.title = this.title;
  }
}
