import {animate, Component, Input, Renderer, style, transition, trigger} from "@angular/core";
import {Total} from "../model/total.model";

@Component({
  selector: 'total-table',
  styleUrls: ['total.component.css'],
  templateUrl: 'total.component.html'
})

export class TotalComponent{

  @Input() total : Total[];
  @Input() title : String;
  @Input() under : boolean = true;

  public isCollapsed :boolean = true;

  constructor(private renderer : Renderer){

  }

  isBorder(title,stake, index){
    if(title.indexOf("Azijský") !== -1){
      return (stake === "Prehra") ? true : false;
    }
    else {
      return (index%3 === 2) ? true : false;
    }
  }

  setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }
}
