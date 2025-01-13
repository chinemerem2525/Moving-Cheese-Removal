import { FormService } from '../../services/form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteFormDetails } from '../../model/quote';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss'],
})
export class GetQuoteComponent implements OnInit {
  quoteForm!: FormGroup;
  id: any;



  constructor(private fb: FormBuilder, private fs: FormService) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10,}')]],
      movingType: ['', Validators.required],
      moveDate: ['', Validators.required],
      movingFrom: ['', Validators.required],
      movingTo: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.quoteForm.valid) {
      const quoteFormDetails = new QuoteFormDetails(
       this.id,
       this.quoteForm.value.name,
       this.quoteForm.value.email,
       this.quoteForm.value.phone,
       this.quoteForm.value.movingType,
       this.quoteForm.value.moveDate,
       this.quoteForm.value.movingFrom,
       this.quoteForm.value.movingTo,
       this.quoteForm.value.message,
       new Date().toISOString()
      );

      console.log('quoteFormDetails', quoteFormDetails);
      this.fs.sendFormData(quoteFormDetails).subscribe(
        (response:any)=>{
          console.log('Form submitted', response.name);
        }
      )
      this.quoteForm.reset(); // Reset the form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}
