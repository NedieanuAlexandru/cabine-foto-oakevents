import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { MenuComponent } from './menu/menu.component';
import { PackPricesComponent } from './pack-prices/pack-prices.component';
import { PhotoCabinsComponent } from './photo-cabins/photo-cabins.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { CabinModelsComponent } from './cabin-models/cabin-models.component';

@NgModule({
  declarations: [
    AppComponent,
    StartingPageComponent,
    MenuComponent,
    PackPricesComponent,
    PhotoCabinsComponent,
    CopyrightComponent,
    CabinModelsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
