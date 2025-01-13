import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements AfterViewInit {
  counters = [
    { title: '+ Removals Done', target: 120, value: 0, icon: 'fal fa-layer-group' },
    { title: '+ TONS OF GOODS', target: 150, value: 0, icon: 'fal fa-truck-loading' },
    { title: '+ Happy Clients', target: 120, value: 0, icon: 'fal fa-user-friends' },
    { title: '+ Star Rated', target: 4.9, value: 0, icon: 'fal fa-award' }
  ];

  @ViewChild('counterArea') counterArea!: ElementRef;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounters();
            observer.disconnect(); // Stop observing once the counters start
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    observer.observe(this.counterArea.nativeElement);
  }

  startCounters() {
    this.counters.forEach(counter => {
      this.animateCounter(counter);
    });
  }

  animateCounter(counter: { target: number; value: number; icon: string }) {
    const duration = 4000; // duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / counter.target));
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += 1;
      counter.value = currentCount;

      if (currentCount >= counter.target) {
        clearInterval(interval);
        counter.value = counter.target; // Ensure it ends at the target
      }
    }, stepTime);
  }
}
