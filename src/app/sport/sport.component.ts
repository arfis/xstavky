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

  constructor(private sportService : SportService){

    let currentDate : Date = new Date();
    let lastDownload : Date = new Date(JSON.parse(localStorage.getItem('feedDownload')));
    let aktContent : Feed = JSON.parse(localStorage.getItem('feed'));

    if (!aktContent ||
          (this.duratesMoreThan(currentDate, lastDownload, 30))) {

      this.sportService.getFeedContent("Akt").subscribe(
        feed => {
          this.aktContent = feed;
          localStorage.setItem('feed', JSON.stringify(this.aktContent));
          localStorage.setItem('feedDownload', JSON.stringify(new Date()));
        }
      );
    }

    else {
      this.aktContent = aktContent;
    }

  }

  duratesMoreThan(firstDate : Date, secondDate : Date, shouldDurate : number){
    shouldDurate = shouldDurate*1000;
    let duration = firstDate.valueOf() - secondDate.valueOf();
    return (duration > shouldDurate);
  }

  ngOnInit(): void {

  }
}
