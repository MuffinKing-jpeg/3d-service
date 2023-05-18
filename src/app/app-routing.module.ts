import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import ContactsJson from './config/contacts.json';
import {RedirectComponent} from './components/redirect/redirect.component';
import {RedirectGuard} from './redirect.guard';

const contactsRoutes: Routes = [];

for (let i = 0; i < ContactsJson.length; i++) {
  contactsRoutes.push({
    path: ContactsJson[i].name,
    canActivate: [RedirectGuard],
    component: RedirectComponent,
    data: {
      externalUrl: ContactsJson[i].link,
    },
  });
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/main-page/main-page.module')
        .then((m) => m.MainPageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./components/create/create.module')
        .then((m) => m.CreateModule),
  },
  {
    path: 'success',
    loadChildren: () => import('./components/success/success.module')
        .then((m) => m.SuccessModule),
  },
  ...contactsRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
