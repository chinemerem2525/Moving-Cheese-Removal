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
  isHouseRemoval: boolean = false;
  selectedVideo: File | null = null;


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
      inventory: [''],
      message: [''],
    });
  }

  onMovingTypeChange() {
    this.isHouseRemoval = this.quoteForm.get('movingType')?.value === 'House Removal';
    if (this.isHouseRemoval) {
      this.quoteForm.get('inventory')?.setValidators(Validators.required);
    } else {
      this.quoteForm.get('inventory')?.clearValidators();
      this.quoteForm.get('inventory')?.reset();
    }
    this.quoteForm.get('inventory')?.updateValueAndValidity();
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
       this.quoteForm.value.inventory,
       new Date().toISOString()
      );

      console.log('quoteFormDetails', quoteFormDetails);

      // Send FormData to the service
      this.fs.sendFormData(quoteFormDetails).subscribe(
        (response: any) => {
          console.log('Form submitted', response.name);
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );

      this.quoteForm.reset(); // Reset the form after submission
      this.selectedVideo = null; // Reset the selected video
    } else {
      console.log('Form is invalid');
    }
  }
}
