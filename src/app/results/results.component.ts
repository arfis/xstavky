/**
 * Created by a619678 on 20. 3. 2017.
 */
import {
  ChangeDetectionStrategy, Component, OnInit, OnChanges, style, animate, transition,
  trigger, Renderer
} from "@angular/core";
import {ResultsService} from "./results.service";
import {Total} from "./model/total.model";
import {Stake} from "./model/Stake.model";

@Component({
  selector: 'results',
  styleUrls: ['results.component.css'],
  templateUrl: 'results.component.html',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate('500ms linear', style({opacity: '*'}))
      ]),
      transition('* => void', [
        style({opacity: '*'}),
        animate('500ms linear', style({opacity: 0}))
      ])
    ])
  ]
})

export class ResultsComponent implements OnInit{

  matches : Stake[];
  total : Total[];
  totalIndividual : Total[];
  asianHandicap : Total[];

  constructor(private renderer : Renderer, resultsService : ResultsService){
    resultsService.getMatches().subscribe(
      matches => this.matches = matches
    )

    resultsService.getTotal().subscribe(
      total => this.total = total
    )

    resultsService.getTotalIndividual().subscribe(
      totalIndividual => this.totalIndividual = totalIndividual
    )

    resultsService.getAsianHandicap().subscribe(
      asianHandicap => this.asianHandicap = asianHandicap
    )
  }

  setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }

  ngOnInit(): void {

  }

  public isCollapsedMatch:boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
