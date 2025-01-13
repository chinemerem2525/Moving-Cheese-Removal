import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/shared/model/contact';
import { FormService } from 'src/app/shared/component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  id: any;

  constructor(private fb: FormBuilder, private fs: FormService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Getter for easy access to form controls
  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactFormDetails = new ContactFormDetails(
        this.id,
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.subject,
        this.contactForm.value.message,
        new Date().toISOString()
       );

       console.log('contactFormDetails', contactFormDetails);
       this.fs.sendContactFormData(contactFormDetails).subscribe(
         (response:any)=>{
           console.log('Form submitted', response.name);
         }
       )
      this.contactForm.reset(); // Reset the form after submission


    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
