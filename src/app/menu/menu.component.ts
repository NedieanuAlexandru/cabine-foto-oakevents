import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title = 'openModal-js';
  constructor(private router: Router) {}
  modal: any;

  ngOnInit(): void {}

  home() {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  pricePacks() {
    this.router.navigateByUrl('/pack-prices');
  }

  cabins() {
    this.router.navigateByUrl('/cabin-models');
  }
}
