import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appSticky]'
})


export class StickyDirective {

  @Input() offsetTop;
  @Input() stickyClass = "fixed-element";
  fixed:boolean=false;
  unfixPosition : number;

  @HostListener('window:scroll',['$event'])
  onScroll($event:Event){
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = this._el.nativeElement.getBoundingClientRect(),
      offset   = elemRect.top - bodyRect.top;

    if(elemRect.top <= this.offsetTop && !this.fixed){
      this.unfixPosition = bodyRect.top;
      this.render.setElementClass(this._el.nativeElement, this.stickyClass,true);
      this.fixed = true;
    }

    else if(bodyRect.top > this.unfixPosition && this.fixed){
      this.render.setElementClass(this._el.nativeElement,this.stickyClass,false);
      this.fixed = false;
    }
  }

  constructor(private _el : ElementRef, private render:Renderer) {

  }

}
