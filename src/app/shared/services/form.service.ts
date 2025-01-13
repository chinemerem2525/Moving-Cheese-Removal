import { QuoteFormDetails } from './../model/quote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Correct map operator import
import { ContactFormDetails } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private databaseUrl = 'https://moving-cheese-removal-default-rtdb.firebaseio.com/quoteForm.json'

  private contactUrl = 'https://moving-cheese-removal-default-rtdb.firebaseio.com/contactForm.json'

  constructor(private http: HttpClient) { }

  sendFormData(quoteFormDetails: QuoteFormDetails){
   const headers = new HttpHeaders({
    header: 'quoteForm'
   });

   return this.http.post <{name:string}>(`${this.databaseUrl}`, quoteFormDetails, {headers: headers});
  }

  sendContactFormData(contacFormDetails: ContactFormDetails){
    const headers = new HttpHeaders({
     header: 'contactForm'
    });

    return this.http.post <{name:string}>(`${this.contactUrl}`, contacFormDetails, {headers: headers});
   }

  getFormData(): Observable<QuoteFormDetails[]> {
    const headers = new HttpHeaders({ header: 'QuoteForm' });
    return this.http
      .get<{ [key: string]: QuoteFormDetails }>(
        `${this.databaseUrl}`
      )
      .pipe(
        map((response:any) => {
          let forms: QuoteFormDetails[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              forms.push({...response[key], id: key});
            }
          }

          return forms;
        })
      );
  }

  getContactFormData(): Observable<ContactFormDetails[]> {
    const headers = new HttpHeaders({ header: 'ContactForm' });
    return this.http
      .get<{ [key: string]: ContactFormDetails }>(
        `${this.contactUrl}`
      )
      .pipe(
        map((response:any) => {
          let forms: ContactFormDetails[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              forms.push({...response[key], id: key});
            }
          }

          return forms;
        })
      );
  }

}
