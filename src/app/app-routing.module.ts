import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { TeamComponent } from './about/team/team.component';
import { DetailComponent } from './about/detail/detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'about', component: AboutComponent,
    children: [
      { path: 'team', component: TeamComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
