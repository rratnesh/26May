import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { MypipePipe } from './pipes/mypipe.pipe';
import { NewService } from './services/new.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// obj1 = {
//   name: 'Ratnesh'
// }

// obj2 = {
//   name: 'hdjgdhj'
// }
