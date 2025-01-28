import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private ls: LoaderService, private router: Router) { }

  ngOnInit(): void {
    this.initScrollToTop();
  }

  // Method to initialize the scroll-to-top functionality
  private initScrollToTop(): void {
    const scrollTopButton = document.getElementById('scroll-top');

    if (scrollTopButton) {
      // Show or hide the button based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          scrollTopButton.style.display = 'block'; // Show the button
        } else {
          scrollTopButton.style.display = 'none'; // Hide the button
        }
      });

      // Add click event listener for smooth scrolling
      scrollTopButton.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scrolling
        });
      });
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
