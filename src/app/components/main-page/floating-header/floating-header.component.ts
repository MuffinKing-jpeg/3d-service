import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-floating-header',
    templateUrl: './floating-header.component.html',
    styleUrls: ['./floating-header.component.scss']
})
export class FloatingHeaderComponent {
    @Input() sticky = false;
    @Input() transparent = false;

}
