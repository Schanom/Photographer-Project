import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartComponent } from './start/start.component';
import { HeroComponent } from './hero/hero.component';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';
import { LogosComponent } from './logos/logos.component';
import { PhotogridComponent } from './photogrid/photogrid.component';
import { CardsComponent } from './cards/cards.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    StartComponent,
    HeroComponent,
    TextCarouselComponent,
    LogosComponent,
    PhotogridComponent,
    CardsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
