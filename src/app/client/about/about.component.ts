import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor() { }


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

}
