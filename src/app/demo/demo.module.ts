/**
 * Created by a619678 on 6. 3. 2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap';
import {DemoService} from "./demo.service";
import {DemoComponent} from "./demo.component";
import {DemoRoutingModule} from "./demo.routing.module";
import {Demo2Component} from "./demo2.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    DemoComponent,
    Demo2Component
  ],
  exports: [
    DemoComponent,
    Demo2Component
  ],
  providers: [DemoService]
})
export class DemoModule {}
