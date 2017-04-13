import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  active : string = "/system";
  routeInfo;

  constructor(){
    if(window.location.hash.length > 1) {
      this.active = window.location.hash.substr(1, window.location.hash.length);
    }
    else
      this.active="/system";
  }

  isLinkSelected(link){
    return (this.active===link);
  }
}
