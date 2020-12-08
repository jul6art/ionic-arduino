import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import {FieldErrorDisplayComponentComponent} from '../field-error-display-component/field-error-display-component.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab4Page}]),
        Tab4PageRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [Tab4Page, FieldErrorDisplayComponentComponent]
})
export class Tab4PageModule {}
