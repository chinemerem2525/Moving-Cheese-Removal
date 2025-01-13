import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/shared/services/form-data.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
  }


  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      this.formDataService.sendFormData(form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
