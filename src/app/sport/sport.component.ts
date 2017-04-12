/**
 * Created by a619678 on 20. 3. 2017.
 */
import {ChangeDetectionStrategy, Component, OnInit, OnChanges} from "@angular/core";
import {SportService} from "./sport.service";
import {Feed} from "./model/Feed.model";
import {Item} from "./model/Item.model";
@Component({
  selector: 'sport',
  styleUrls: ['sport.component.css'],
  templateUrl: 'sport.component.html'
})

export class SportComponent implements OnInit{

  aktContent : Feed = new Feed();
  smeContent : Feed = new Feed();
  items: Item[];
  status : string;
  test : string = "testing sentencee";

  constructor(private sportService : SportService){
    this.sportService.getFeedContent("Akt").subscribe(
      feed => this.aktContent = feed
    );

    // this.sportService.getFeedContent("Sme").subscribe(
    //   feed => this.smeContent = feed
    // );
  }


  ngOnInit(): void {

  }
}
