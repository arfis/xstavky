/**
 * Created by a619678 on 20. 3. 2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Feed} from "../sport/model/Feed.model";
import {Stake} from "./model/Stake.model";
import {Total} from "./model/total.model";

@Injectable()
export class ResultsService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
  private url = 'http://sport.aktuality.sk/rss/';
  constructor(
    private http: Http
  ) { }

  getMatches(): Observable<Stake[]> {

    return Observable.of(
    [{
      stake: '1',
      result:'2:0',
      winner:'Výhra'
    },
    {
      stake: '1',
      result:'3:3',
      winner:'Prehra'
    },
    {
      stake: '1',
      result:'2:5',
      winner:'Prehra'
    },
    {
      stake: 'X',
      result:'2:0',
      winner:'Prehra'
    },
    {
      stake: 'X',
      result:'3:3',
      winner:'Výhra'
    },
    {
      stake: 'X',
      result:'2:5',
      winner:'Prehra'
    },
    {
      stake: '2',
      result:'2:0',
      winner:'Prehra'
    },
    {
      stake: '2',
      result:'3:3',
      winner:'Prehra'
    },
    {
      stake: '2',
      result:'2:5',
      winner:'Výhra'
    },
    {
      stake: '1X',
      result:'2:0',
      winner:'Výhra'
    },
    {
      stake: '1X',
      result:'3:3',
      winner:'Výhra'
    },
    {
      stake: '1X',
      result:'2:5',
      winner:'Prehra'
    },
    {
      stake: '2X',
      result:'2:0',
      winner:'Prehra'
    },
    {
      stake: '2X',
      result:'3:3',
      winner:'Výhra'
    },
    {
      stake: '2X',
      result:'2:5',
      winner:'Výhra'
    }
    ])

  }

  getAsianHandicap():Observable<Total[]>{
    return Observable.of([
  {
    stake:'-0',
    result:'Výhra',
    resultStake:'Výhra',
    total:'+0',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0',
    result:'Remíza',
    resultStake:'Refundácia vkladu',
    total:'+0',
    resultTotal:'Remíza',
    resultTotalStake:'Refundácia vkladu'
  },
  {
    stake:'-0',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+0',
    resultTotal:'Prehra',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-0.25',
    result:'Výhra',
    resultStake:'Výhra',
    total:'+0.25',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0.25',
    result:'Remíza',
    resultStake:'Refundácia 1/2 vkladu',
    total:'+0.25',
    resultTotal:'Remíza',
    resultTotalStake:'Refundácia vkladu + 1/2 výhry'
  },
  {
    stake:'-0.25',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+0.25',
    resultTotal:'Prehra',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-0.5',
    result:'Výhra',
    resultStake:'Výhra',
    total:'+0.5',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0.5',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+0.5',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0.5',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+0.5',
    resultTotal:'Prehra',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-0.75',
    result:'Výhra o 2+góly',
    resultStake:'Výhra',
    total:'+0.75',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0.75',
    result:'Výhra o 1 gól',
    resultStake:'Refundácia vkladu + 1/2 výhry',
    total:'+0.75',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-0.75',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+0.75',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Refundácia 1/2 vkladu'
  },
  {
    stake:'-0.75',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+0.75',
    resultTotal:'Prehra o 2+ góly',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-1.00',
    result:'Výhra o 2+ góly',
    resultStake:'Výhra',
    total:'+1.00',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.00',
    result:'Výhra o 1 gól',
    resultStake:'Refundácia vkladu',
    total:'+1.00',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.00',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+1.00',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Refundácia vkladu'
  },
  {
    stake:'-1.00',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+1.00',
    resultTotal:'Prehra o 2+ góly',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-1.25',
    result:'Výhra o 2+ góly',
    resultStake:'Výhra',
    total:'+1.25',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.25',
    result:'Výhra o 1 gól',
    resultStake:'Refundácia 1/2 vkladu',
    total:'+1.25',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.25',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+1.25',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Refundácia vkladu + 1/2 výhry'
  },
  {
    stake:'-1.25',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+1.00',
    resultTotal:'Prehra o 2+ góly',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-1.50',
    result:'Výhra o 2+ góly',
    resultStake:'Výhra',
    total:'+1.50',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.50',
    result:'Výhra o 1 gól',
    resultStake:'Prehra',
    total:'+1.50',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.50',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+1.50',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.50',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+1.50',
    resultTotal:'Prehra o 2+ góly',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-1.75',
    result:'Výhra o 3+ góly',
    resultStake:'Výhra',
    total:'+1.75',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.75',
    result:'Výhra o 2 góly',
    resultStake:'Refundácia vkladu + 1/2 výhry',
    total:'+1.75',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.75',
    result:'Výhra o 1 gól',
    resultStake:'Prehra',
    total:'+1.75',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-1.75',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+1.75',
    resultTotal:'Prehra o 2 góly',
    resultTotalStake:'Refundácia 1/2 vkladu'
  },
  {
    stake:'-1.75',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+1.75',
    resultTotal:'Prehra o 3+ góly',
    resultTotalStake:'Prehra'
  },
  {
    stake:'-2.00',
    result:'Výhra o 3+ góly',
    resultStake:'Výhra',
    total:'+2.00',
    resultTotal:'Výhra',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-2.00',
    result:'Výhra o 2 góly',
    resultStake:'Refundácia vkladu',
    total:'+2.00',
    resultTotal:'Remíza',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-2.00',
    result:'Výhra o 1 gól',
    resultStake:'Prehra',
    total:'+2.00',
    resultTotal:'Prehra o 1 gól',
    resultTotalStake:'Výhra'
  },
  {
    stake:'-2.00',
    result:'Remíza',
    resultStake:'Prehra',
    total:'+2.00',
    resultTotal:'Prehra o 2 góly',
    resultTotalStake:'Refundácia vkladu'
  },
  {
    stake:'-2.00',
    result:'Prehra',
    resultStake:'Prehra',
    total:'+2.00',
    resultTotal:'Prehra o 3+ góly',
    resultTotalStake:'Prehra'
  }
  ])
  }

  getTotalIndividual() : Observable<Total[]>{
    return Observable.of([
      {
        stake:'1 over/nad (0.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (0.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },
      {
        stake:'1 over/nad (0.5)',
        result:'1:0 (1 gól)',
        resultStake:'Výhra',
        total:'under/pod (0.5)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (0.5)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (0.5)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (1)',
        result:'0:2 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (1)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (1)',
        result:'1:0 (1 gól)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (1)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'1 over/nad (1)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (1)',
        resultTotal:'4:7 (4 góly)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (1.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (1.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (1.5)',
        result:'1:0 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (1.5)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (1.5)',
        result:'4:7 (4 góly)',
        resultStake:'Výhra',
        total:'under/pod (1.5)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (2)',
        result:'0:4 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (2)',
        resultTotal:'0:4 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (2)',
        result:'2:4 (2 góly)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (2)',
        resultTotal:'2:4 (1 gól)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'1 over/nad (2)',
        result:'4:7 (4 góly)',
        resultStake:'Výhra',
        total:'under/pod (2)',
        resultTotal:'4:7 (4 góly)',
        resultTotalStake:'Prehra'
      },
      {
        stake:'1 over/nad (2.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (2.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (2.5)',
        result:'1:4 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (2.5)',
        resultTotal:'1:4 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (2.5)',
        result:'4:2 (4 góly)',
        resultStake:'Výhra',
        total:'under/pod (2.5)',
        resultTotal:'4:2 (4 góly)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (3)',
        result:'1:0 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (3)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (3)',
        result:'3:5 (3 góly)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (3)',
        resultTotal:'3:5 (3 góly)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'1 over/nad (3)',
        result:'4:7 (4 góly)',
        resultStake:'Výhra',
        total:'under/pod (3)',
        resultTotal:'4:7 (4 góly)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (50)',
        result:'34:30 (34 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50)',
        resultTotal:'34:30 (34 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (50)',
        result:'50:46 (50 gólov)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (50)',
        resultTotal:'50:46 (50 gólov)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'1 over/nad (50)',
        result:'62:25 (62 gólov)',
        resultStake:'Výhra',
        total:'under/pod (50)',
        resultTotal:'62:25 (62 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'1 over/nad (50.5)',
        result:'40:12 (40 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50.5)',
        resultTotal:'40:12 (40 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (50.5)',
        result:'44:16 (44 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50.5)',
        resultTotal:'44:16 (44 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'1 over/nad (50.5)',
        result:'62:25 (62 gólov)',
        resultStake:'Výhra',
        total:'under/pod (50.5)',
        resultTotal:'62:25 (62 gólov)',
        resultTotalStake:'Prehra'
      }
    ])
  }

  getTotal() : Observable<Total[]> {
    return Observable.of([
      {
        stake:'over/nad (0.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (0.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },
      {
        stake:'over/nad (0.5)',
        result:'1:0 (1 gól)',
        resultStake:'Výhra',
        total:'under/pod (0.5)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (0.5)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (0.5)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (1)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (1)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (1)',
        result:'1:0 (1 gól)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (1)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'over/nad (1)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (1)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (1.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (1.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (1.5)',
        result:'1:0 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (1.5)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (1.5)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (1.5)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (2)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (2)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (2)',
        result:'1:1 (2 góly)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (2)',
        resultTotal:'1:1 (2 góly)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'over/nad (2)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (2)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },
      {
        stake:'over/nad (2.5)',
        result:'0:0 (0 gólov)',
        resultStake:'Prehra',
        total:'under/pod (2.5)',
        resultTotal:'0:0 (0 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (2.5)',
        result:'1:0 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (2.5)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (2.5)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (2.5)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (3)',
        result:'1:0 (1 gól)',
        resultStake:'Prehra',
        total:'under/pod (3)',
        resultTotal:'1:0 (1 gól)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (3)',
        result:'1:2 (3 góly)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (3)',
        resultTotal:'1:2 (3 góly)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'over/nad (3)',
        result:'4:7 (11 gólov)',
        resultStake:'Výhra',
        total:'under/pod (3)',
        resultTotal:'4:7 (11 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (50)',
        result:'34:12 (46 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50)',
        resultTotal:'34:12 (48 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (50)',
        result:'34:16 (50 gólov)',
        resultStake:'Refundácia vkladu',
        total:'under/pod (50)',
        resultTotal:'34:16 (50 gólov)',
        resultTotalStake:'Refundácia vkladu'
      },{
        stake:'over/nad (50)',
        result:'62:25 (87 gólov)',
        resultStake:'Výhra',
        total:'under/pod (50)',
        resultTotal:'62:25 (87 gólov)',
        resultTotalStake:'Prehra'
      },{
        stake:'over/nad (50.5)',
        result:'34:12 (46 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50.5)',
        resultTotal:'34:12 (46 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (50.5)',
        result:'34:16 (50 gólov)',
        resultStake:'Prehra',
        total:'under/pod (50.5)',
        resultTotal:'34:16 (50 gólov)',
        resultTotalStake:'Výhra'
      },{
        stake:'over/nad (50.5)',
        result:'62:25 (87 gólov)',
        resultStake:'Výhra',
        total:'under/pod (50.5)',
        resultTotal:'62:25 (87 gólov)',
        resultTotalStake:'Prehra'
      }
      ]
    );
}

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
