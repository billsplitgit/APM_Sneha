import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { RouterModule } from '@angular/router';

// import {HttpClient} from "@angular/common/http";
import {HttpModule} from '@angular/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  // tslint:disable-next-line:no-trailing-whitespace
  imports: [ BrowserModule,  HttpModule, 
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [ AppComponent,  WelcomeComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
