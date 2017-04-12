/**
 * Created by a619678 on 6. 3. 2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import {TotalComponent} from "./total.component";
import {ResultsService} from "../results.service";
import {StakeFilter} from "./result.pipe.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [
    TotalComponent,
    StakeFilter
  ],
  exports: [
    TotalComponent
  ],
  providers: [ResultsService]
})
export class TotalModule {}
