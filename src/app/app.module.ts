import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouterModule} from "./app.routing.module";
import {WelcomeComponent} from "./welcome.component";
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BonusComponent } from './bonus/bonus.component';
import {Ng2StickyModule} from "ng2-sticky";
import {NguiStickyModule} from "@ngui/sticky";
import { StickyDirective } from './utils/sticky/sticky.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BonusComponent,
    StickyDirective,
  ],

  imports: [
    NguiStickyModule,
    Ng2StickyModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    CarouselModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
