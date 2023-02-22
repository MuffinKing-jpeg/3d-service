import {Component} from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    headerStick = false
    headerTransparent = false

    public updateVisibility(state: boolean) {
        this.headerStick = !state
    }

    public updateTransparency(state: boolean) {
        this.headerTransparent = state
    }
}
