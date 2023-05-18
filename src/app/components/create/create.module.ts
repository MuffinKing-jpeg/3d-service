import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from "./create.component";
import {RouterModule, Routes} from "@angular/router";
import {CreateFormComponent} from './create-form/create-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {ModalModule} from "ngx-bootstrap/modal";
import {NpSelectorComponent} from './np-selector/np-selector.component';
import {HttpClientModule} from "@angular/common/http";
import {TypeaheadModule} from "ngx-bootstrap/typeahead";
import {MapLoaderModule} from "./map-component/map-loader.module";

const routes: Routes = [
    {path: '', component: CreateComponent}
]

@NgModule({
    bootstrap: [
        CreateComponent
    ],
    declarations: [
        CreateComponent,
        CreateFormComponent,
        NpSelectorComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MapLoaderModule,

        RouterModule.forChild(routes),
        CollapseModule,
        ButtonsModule,
        TypeaheadModule,
        ModalModule.forChild()
    ]
})
export class CreateModule {
}
