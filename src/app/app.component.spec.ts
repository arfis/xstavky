/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router, RouterOutlet} from "@angular/router";
import {Renderer} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {CarouselModule} from "ng2-bootstrap";
import {AppRouterModule} from "./app.routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BonusComponent} from "./bonus/bonus.component";

class MockRouter { public navigate() {}; }

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CarouselModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        Renderer
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it(`should have as title 'app works!' and has`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Xstavky.sk');
  }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('footer').textContent).toContain('app works!');
  // }));
});
