import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// import the routing module
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    // add the routing component reference
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]   // add the routing component reference
})
export class AppModule { }

