/**
 * Created by a619678 on 6. 3. 2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {SportComponent} from "./sport.component";

const calendarRoutes: Route[] = [

  {
    path: 'sport',
    component: SportComponent,
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
export class SportRoutingModule { };
