import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CounterComponent } from './component/counter/counter.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { GetQuoteComponent } from './component/get-quote/get-quote.component';
import { FormService } from './services/form.service';
import { NotificationComponent } from './component/notification/notification.component';
import { LoaderComponent } from './component/loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    HowItWorksComponent,
    GetQuoteComponent,
    NotificationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    HowItWorksComponent,
    GetQuoteComponent,
    NotificationComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
