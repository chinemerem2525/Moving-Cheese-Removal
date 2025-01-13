import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formDataSubject = new Subject<any>();
  formData$ = this.formDataSubject.asObservable();

  sendFormData(data: any): void {
    this.formDataSubject.next(data);
  }
}
