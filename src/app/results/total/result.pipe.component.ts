import {PipeTransform, Injectable, Pipe} from "@angular/core";
@Pipe({
  name: 'stakeFilter',
  pure: false
})
@Injectable()
export class StakeFilter implements PipeTransform {
  transform(items: any[], args: any[]): any {
    if(args) {
      console.log("filter:" + args);
      return items.filter(item => item.stake.indexOf(args) !== -1);
    }
    else
      return items;
  }
}
