import { Component } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { IRoutes } from '../interfaces/IRoutes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public routes: IRoutes[] = [
    { path: '/', title: 'home' },
    { path: '/product', title: 'product' },
  ];

  constructor(private spinner: NgxSpinnerService) {}
}
