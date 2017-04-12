/**
 * Created by a619678 on 6. 3. 2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SportService} from "./sport.service";
import {SportComponent} from "./sport.component";
import {SportRoutingModule} from "./sport.routing.module";
import { ButtonsModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SportRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    SportComponent
  ],
  exports: [
    SportComponent
  ],
  providers: [SportService]
})
export class SportModule {}
