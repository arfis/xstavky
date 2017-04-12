/**
 * Created by a619678 on 20. 3. 2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import Any = jasmine.Any;
import {Feed} from "./model/Feed.model";

@Injectable()
export class SportService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
  private AktUrl = 'http://sport.aktuality.sk/rss/';
  private smeUrl = 'http://rss.sme.sk/rss/rss.asp?sek=sport';

  constructor(
    private http: Http
  ) { }

  getFeedContent(url): Observable<Feed> {

    switch(url){
      case 'Akt' :
        console.log("returning aktuality");
        return this.getFeed(this.AktUrl);
      case 'Sme' :
        return this.getFeed(this.smeUrl);
    }

  }

  private getFeed(url){
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
      .map(this.extractFeeds)
      .catch(this.handleError);
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
