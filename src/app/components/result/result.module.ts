import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultPageComponent} from './success-page/result-page.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: ResultPageComponent},
];

@NgModule({
  declarations: [
    ResultPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ResultModule {
}
