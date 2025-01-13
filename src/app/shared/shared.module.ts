import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CounterComponent } from './component/counter/counter.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { GetQuoteComponent } from './component/get-quote/get-quote.component';
import { FormService } from './services/form.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    HowItWorksComponent,
    GetQuoteComponent
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
    GetQuoteComponent
  ]
})
export class SharedModule { }
