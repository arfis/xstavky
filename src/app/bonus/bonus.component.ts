import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit, AfterViewInit {

  banners = [{img:'http://clipartix.com/wp-content/uploads/2016/04/Banner-clip-art-2.png',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper mi placerat elit commodo, eget eleifend sem sagittis. Curabitur tincidunt laoreet dictum. Suspendisse semper consequat tellus. Quisque tempor sem sem, at ullamcorper dolor tempus a. Aliquam posuere ligula a cursus lacinia. In lobortis augue arcu. Vestibulum sodales libero posuere, facilisis diam sit amet, luctus eros. Mauris eros sapien, tincidunt sit amet malesuada in, commodo in odio.    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et orci rutrum, dignissim nisl sit amet, facilisis leo. Nam laoreet vestibulum sollicitudin. Nam laoreet est nisi, ac commodo magna consectetur a. Aliquam euismod aliquet vestibulum. Sed vitae viverra dui, eu scelerisque ante. Suspendisse potenti. Phasellus at ullamcorper massa, et venenatis felis. Vivamus quis purus vel turpis volutpat scelerisque. Aliquam et risus in justo rhoncus euismod non id augue. Maecenas auctor arcu tincidunt ligula vulputate imperdiet. Integer molestie vestibulum ultrices. Proin sed magna eros. Vestibulum mattis id nulla sed ullamcorper. Ut fermentum sagittis metus.Ut eu porttitor sem. Vivamus id tincidunt velit, non pretium orci. Nullam hendrerit ex sed lacus blandit hendrerit. Maecenas porta velit vel odio blandit, ut congue nisi fermentum. Etiam a feugiat lacus. Quisque dolor mi, finibus nec quam ac, mattis lacinia.'}];
  bannerHtml;
  scriptHtml;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://ban.tipsport.sk/c/textA.php?pl=7942";
    this.elementRef.nativeElement.appendChild(s);
  }


  ngOnInit(): void {
  }
}
