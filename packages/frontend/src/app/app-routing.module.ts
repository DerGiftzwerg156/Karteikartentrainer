import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeSideComponent} from "./routerOutlets/home-side/home-side.component";
import {CollectionOverviewComponent} from "./routerOutlets/collection-overview/collection-overview.component";
import {EditCollectionComponent} from "./routerOutlets/edit-collection/edit-collection.component";
import {LeranModeComponent} from "./routerOutlets/learn-mode/leran-mode.component";
import {LogoutComponent} from "./core/logout/logout.component";

const routes: Routes = [
  {path: '', component: HomeSideComponent},
  {path: 'logout',component:LogoutComponent},
  {path: 'myCollections', component: CollectionOverviewComponent},
  {path: 'editCollection/:collectionId', component: EditCollectionComponent},
  {path: 'learnMode/:collectionId', component: LeranModeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
