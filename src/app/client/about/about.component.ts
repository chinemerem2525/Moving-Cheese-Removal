import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private ls: LoaderService, private router: Router) { }


  ngAfterViewInit(): void {
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });
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
