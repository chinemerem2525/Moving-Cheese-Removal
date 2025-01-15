import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

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
}
