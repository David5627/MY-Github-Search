import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ProfileService } from './profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { DateCountPipe } from './date-count.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DateCountPipe

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
