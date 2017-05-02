import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterSampleComponent} from "./router-sample/router-sample.component";

const routes: Routes = [
  {
    path: 'router',
    component: RouterSampleComponent
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
