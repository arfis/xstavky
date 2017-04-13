/**
 * Created by a619678 on 6. 3. 2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {DemoComponent} from "./demo.component";
import {Demo2Component} from "./demo2.component";

const calendarRoutes: Route[] = [

  {
    path: 'system',
    component: DemoComponent,
    children: [

      // {
      //   path: 'parameter-types',
      //   component: ParameterTypesComponent
      // },
      // {
      //   path: 'parameter-groups',
      //   component: ParameterGroupsComponent
      // },
      // {
      //   path: 'parameter-groups/:parameterGroupId',
      //   component: ParameterGroupComponent
      // }
    ]
  },
  {
    path: 'second',
    component: Demo2Component,
    children: []
  }
];

@NgModule({

  imports: [

    RouterModule.forChild(calendarRoutes)
  ],
  declarations:[
  ],
  exports: [

    RouterModule
  ]
})
export class DemoRoutingModule { };
