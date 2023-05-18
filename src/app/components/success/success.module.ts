import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuccessPageComponent} from './success-page/success-page.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: SuccessPageComponent},
];

@NgModule({
  declarations: [
    SuccessPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class SuccessModule {
}
