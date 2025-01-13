import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContactFormDetails } from 'src/app/shared/model/contact';
import { QuoteFormDetails } from 'src/app/shared/model/quote';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  formData: QuoteFormDetails[] = [];
  contactData: ContactFormDetails[] = [];

  constructor(private fs: FormService, private http: HttpClient) {}

  ngOnInit(): void {
   this.fs.getFormData().subscribe(
    (response:any)=>{
     this.formData = response;
   });

   this.fs.getContactFormData().subscribe(
    (response:any)=>{
     this.contactData = response;
   })
  }


  ngAfterViewInit(): void {
    // Use this lifecycle hook to access DOM elements after the view initializes
    const sidebarLinks = document.querySelectorAll<HTMLAnchorElement>('.sidebar a');
    const contentSections = document.querySelectorAll<HTMLElement>('.main-content > div');

    sidebarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Hide all sections
        contentSections.forEach(section => {
          section.classList.add('d-none');
        });

        // Get the target section ID from the 'href' attribute
        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetSection = document.querySelector<HTMLElement>(targetId);
          if (targetSection) {
            targetSection.classList.remove('d-none');
          }
        }
      });
    });
  }

  // Delete Form Data by ID
  showConfirmDialog = false;
  taskToDelete: string | undefined;

  // contact
  showContactConfirmDialog = false;
  contactTaskToDelete: string | undefined;

  toggleConfirmDialog(id: string | undefined) {
    this.taskToDelete = id;
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  toggleContactConfirmDialog(id: string | undefined) {
    this.contactTaskToDelete = id;
    this.showContactConfirmDialog = !this.showContactConfirmDialog;
  }

  confirmDelete() {
    if (this.taskToDelete) {
      this.http.delete('https://moving-cheese-removal-default-rtdb.firebaseio.com/quoteForm/' + this.taskToDelete + '.json').subscribe(() => {
        this.formData = this.formData.filter((form) => form.id !== this.taskToDelete);
        console.log(`Deleted task with id: ${this.taskToDelete}`);
        this.taskToDelete = undefined;
      });
    } else {
      console.log('Task id is undefined');
    }
    this.showConfirmDialog = false;
  }

  confirmContactDelete() {
    if (this.contactTaskToDelete) {
      this.http.delete('https://moving-cheese-removal-default-rtdb.firebaseio.com/contactForm/' + this.contactTaskToDelete + '.json').subscribe(() => {
        this.contactData = this.contactData.filter((form) => form.id !== this.contactTaskToDelete);
        console.log(`Deleted task with id: ${this.contactTaskToDelete}`);
        this.contactTaskToDelete = undefined;
      });
    } else {
      console.log('Task id is undefined');
    }
    this.showContactConfirmDialog = false;
  }

  cancelDelete() {
    this.taskToDelete = undefined;
    this.showConfirmDialog = false;
  }

  cancelContactDelete() {
    this.contactTaskToDelete = undefined;
    this.showContactConfirmDialog = false;
  }
}
