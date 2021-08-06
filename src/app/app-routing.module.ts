import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { PackPricesComponent } from './pack-prices/pack-prices.component';
import { PhotoCabinsComponent } from './photo-cabins/photo-cabins.component';
import { CabinModelsComponent } from './cabin-models/cabin-models.component';

const routes: Routes = [
  { path: '', component: PhotoCabinsComponent },
  { path: 'starting-page', component: StartingPageComponent },
  { path: 'pack-prices', component: PackPricesComponent },
  { path: 'cabin-models', component: CabinModelsComponent },
  { path: 'cabin-models', loadChildren: '#cab-vintage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
