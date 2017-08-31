import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
=======
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent} from "./shared/star.component";
//import {HttpClient} from "@angular/common/http";
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent],
>>>>>>> be7c34fa6168c89f1ddf43fbc374b8f985d8c41c
  bootstrap: [ AppComponent ]
})
export class AppModule { }
