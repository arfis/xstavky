import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome.component";
import {SportModule} from "./sport/sports.module";
import {DemoModule} from "./demo/demo.module";
import {ResultsModule} from "./results/results.module";
import {DemoComponent} from "./demo/demo.component";
import {BonusRoutingModule} from "./bonus/bonus.routing.module";

const appRoutes: Route[] = [

  {
    path: 'system',
    component: DemoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'system'
  },
  {
    path: '**',
    redirectTo: 'system'
  }

];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),
    SportModule,
    DemoModule,
    ResultsModule,
    BonusRoutingModule
  ],
  exports: [

    RouterModule
  ]
})
export class AppRouterModule {

}
