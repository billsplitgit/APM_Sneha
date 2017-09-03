import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent} from './shared/star.component';
import { RouterModule } from '@angular/router';
import {ProductGaurdService} from './products/product-gaurd.service';
// import {HttpClient} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  // tslint:disable-next-line:no-trailing-whitespace
  imports: [ BrowserModule, FormsModule, HttpModule, 
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',canActivate: [ProductGaurdService], component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [ AppComponent, ProductListComponent , ProductDetailComponent, ConvertToSpacesPipe, StarComponent, WelcomeComponent],
  providers: [ProductGaurdService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
