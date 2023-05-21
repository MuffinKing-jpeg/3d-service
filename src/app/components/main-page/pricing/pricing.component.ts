import {Component} from '@angular/core';
import MaterialsJson from '../../../config/materials.json';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  pricing = MaterialsJson;
}
