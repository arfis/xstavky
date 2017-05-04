import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  active : string = "/system";
  routeInfo;
  title = "Xstavky.sk";

  constructor(private elementRef : ElementRef){
    if(window.location.hash.length > 1) {
      this.active = window.location.hash.substr(1, window.location.hash.length);
    }
    else
      this.active="/system";
  }

  ngAfterViewInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://ban.tipsport.sk/c/textA.php?pl=7923";
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit(): void {
  }

  isLinkSelected(link){
    return (this.active===link);
  }
}
