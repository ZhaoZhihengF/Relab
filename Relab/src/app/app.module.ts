import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

     AgmCoreModule.forRoot({apiKey: 'AIzaSyD-78OZfb6j3hCHX2T-boeJJm2ptd81WLc'}), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

