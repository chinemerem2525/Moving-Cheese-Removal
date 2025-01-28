import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { Router } from '@angular/router';

LoaderService
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
