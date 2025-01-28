import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeRemovalComponent } from './home-removal/home-removal.component';
import { OfficeRemovalComponent } from './office-removal/office-removal.component';
import { PackingComponent } from './packing/packing.component';
import { UnpackingComponent } from './unpacking/unpacking.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    QuoteComponent,
    HomeRemovalComponent,
    OfficeRemovalComponent,
    PackingComponent,
    UnpackingComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClientModule { }
