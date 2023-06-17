import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StandardCardViewComponent} from "./standard-card-view/standard-card-view.component";

const routes: Routes = [
  {path: '', component: StandardCardViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
