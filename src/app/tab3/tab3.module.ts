import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import {FieldErrorDisplayComponentComponent} from '../field-error-display-component/field-error-display-component.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab3Page}]),
        Tab3PageRoutingModule,
        ReactiveFormsModule,
        NgCircleProgressModule,
    ],
    declarations: [Tab3Page, FieldErrorDisplayComponentComponent]
})
export class Tab3PageModule {}
