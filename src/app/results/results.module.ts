/**
 * Created by a619678 on 6. 3. 2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap';
import {ResultsComponent} from "./results.component";
import {ResultsService} from "./results.service";
import {ResultsRoutingModule} from "./results.routing.module";
import {StakeFilter} from "./result.pipe.component";
import { CollapseModule } from 'ng2-bootstrap/collapse';
import {TotalModule} from "./total/total.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResultsRoutingModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    TotalModule
  ],
  declarations: [
    ResultsComponent,
    StakeFilter
  ],
  exports: [
    ResultsComponent,
    StakeFilter
  ],
  providers: [ResultsService]
})
export class ResultsModule {}
