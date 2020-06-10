import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';
import { ContactComponent } from './about/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'about', component: AboutComponent,
    children: [
      { path: 'team', component: TeamComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
