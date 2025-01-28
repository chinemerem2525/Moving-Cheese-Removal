import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/shared/model/contact';
import { FormService } from 'src/app/shared/component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  id: any;

  constructor(private fb: FormBuilder, private fs: FormService, private ns: NotificationService, private ls: LoaderService, private router: Router) {
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

      this.ns.showNotification('Sent. We’ll get back to you shortly.', 'success');

    } else {
      this.ns.showNotification('Please fill out the form correctly.', 'error');
    }
  }



  navigateToHome(){
    this.ls.showLoader();
    this.router.navigate(['']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToAbout(){
    this.ls.showLoader();
    this.router.navigate(['/about']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToQuote(){
    this.ls.showLoader();
    this.router.navigate(['/quote']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToContact(){
    this.ls.showLoader();
    this.router.navigate(['/contact']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToHouse(){
    this.ls.showLoader();
    this.router.navigate(['/home-removal']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToOffice(){
    this.ls.showLoader();
    this.router.navigate(['/office-removal']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToPacking(){
    this.ls.showLoader();
    this.router.navigate(['/packing']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  navigateToUnpacking(){
    this.ls.showLoader();
    this.router.navigate(['/unpacking']).then(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
}
