import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome.component";
import {SportModule} from "./sport/sports.module";
import {DemoModule} from "./demo/demo.module";
import {ResultsModule} from "./results/results.module";
import {DemoComponent} from "./demo/demo.component";

const appRoutes: Route[] = [

  {
    path: 'first',
    component: DemoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  },
  {
    path: '**',
    redirectTo: 'first'
  }

];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),
    SportModule,
    DemoModule,
    ResultsModule
  ],
  exports: [

    RouterModule
  ]
})
export class AppRouterModule {

}