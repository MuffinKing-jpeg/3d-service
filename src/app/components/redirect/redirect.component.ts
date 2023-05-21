import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent {
  public route?: string;

  constructor(private router: Router) {
    this.route = this.router.url;
  }
}
