/**
 * Created by a619678 on 20. 3. 2017.
 */
import {ChangeDetectionStrategy, Component, OnInit, OnChanges} from "@angular/core";
import {DemoService} from "./demo.service";

@Component({
  selector: 'demo',
  styleUrls: ['demo.component.css'],
  templateUrl: 'demo.component.html'
})

export class DemoComponent implements OnInit{

  commentTypes : any[];
  commentHeaders : any[];

  constructor(service : DemoService){
    this.commentTypes = service.getCommentTypes();
    this.commentHeaders = service.getHeaders();
  }

  ngOnInit(): void {

  }
}
