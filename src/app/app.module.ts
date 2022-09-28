import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { NewsContainerComponent } from './news-container/news-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    CardComponent,
    NewsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
