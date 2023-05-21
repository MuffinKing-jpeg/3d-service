import {Component} from '@angular/core';
import Conf from '../../../config/conf.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  public name = Conf.companyName;
}
