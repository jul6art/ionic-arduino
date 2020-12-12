import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import {FieldErrorDisplayComponentComponent} from '../field-error-display-component/field-error-display-component.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab5Page}]),
        Tab5PageRoutingModule,
        ReactiveFormsModule,
        NgCircleProgressModule,
    ],
    declarations: [Tab5Page, FieldErrorDisplayComponentComponent]
})
export class Tab5PageModule {}
