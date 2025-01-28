import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router, private ls: LoaderService) { }

  ngAfterViewInit(): void {
    $('.hero-slider').owlCarousel({
      items: 1, // Show one item at a time
      loop: true, // Enable infinite loop
      autoplay: true, // Enable automatic sliding
      autoplayTimeout: 10000, // Set slide duration (in milliseconds)
      autoplayHoverPause: true, // Pause on hover
      nav: true, // Enable navigation buttons
      dots: true, // Enable pagination dots
      onChanged: this.handleSlideChange,
      navText: [
        '<i class="fas fa-chevron-left"></i>', // Left navigation button icon
        '<i class="fas fa-chevron-right"></i>', // Right navigation button icon
      ],
    });

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

  handleSlideChange(event: any): void {
    let currentIndex = event.item.index;
    let activeSlide = $('.owl-item').eq(currentIndex).find('.hero-content');

    // Reset animations
    $('.hero-content h6, .hero-content h1, .hero-content p, .hero-content .hero-btn')
      .removeClass('animate__fadeInUp animated')
      .css('visibility', 'hidden');

    // Apply animations to active slide
    activeSlide.find('h6').addClass('animate__fadeInUp animated').css('visibility', 'visible');
    activeSlide.find('h1').addClass('animate__fadeInUp animated').css('visibility', 'visible');
    activeSlide.find('p').addClass('animate__fadeInUp animated').css('visibility', 'visible');
    activeSlide.find('.hero-btn').addClass('animate__fadeInUp animated').css('visibility', 'visible');
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
