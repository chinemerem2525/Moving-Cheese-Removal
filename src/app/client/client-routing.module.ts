import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteComponent } from './quote/quote.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeRemovalComponent } from './home-removal/home-removal.component';
import { OfficeRemovalComponent } from './office-removal/office-removal.component';
import { PackingComponent } from './packing/packing.component';
import { UnpackingComponent } from './unpacking/unpacking.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'quote',
        component: QuoteComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'home-removal',
        component: HomeRemovalComponent
      },
      {
        path: 'office-removal',
        component: OfficeRemovalComponent
      },
      {
        path: 'packing',
        component: PackingComponent
      },
      {
        path: 'unpacking',
        component: UnpackingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
