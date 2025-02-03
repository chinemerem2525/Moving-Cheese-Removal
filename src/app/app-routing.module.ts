import { AboutComponent } from './client/about/about.component';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './client/contact/contact.component';
import { QuoteComponent } from './client/quote/quote.component';
import { HomeRemovalComponent } from './client/home-removal/home-removal.component';
import { OfficeRemovalComponent } from './client/office-removal/office-removal.component';
import { PackingComponent } from './client/packing/packing.component';
import { UnpackingComponent } from './client/unpacking/unpacking.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'quote',
    component: QuoteComponent,
  },
  {
    path: 'home-removal',
    component: HomeRemovalComponent,
  },
  {
    path: 'office-removal',
    component: OfficeRemovalComponent,
  },
  {
    path: 'packing',
    component: PackingComponent,
  },
  {
    path: 'unpacking',
    component: UnpackingComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'InformationCockpitEnd',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
