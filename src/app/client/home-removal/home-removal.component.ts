import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-home-removal',
  templateUrl: './home-removal.component.html',
  styleUrls: ['./home-removal.component.scss']
})
export class HomeRemovalComponent implements OnInit {

  constructor(private ls: LoaderService, private router: Router) { }

  ngOnInit(): void {
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
