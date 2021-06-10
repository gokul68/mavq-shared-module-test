import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-loading',
  template: 
  `<mat-card id="loading-card" class="hero-card">
  <mat-card-header>
    <div mat-card-avatar class="hero-header__image"></div>
    <mat-card-title>
      <test-loading-bar [width]="'200px'" [height]="'1rem'"></test-loading-bar>
    </mat-card-title>
    <mat-card-subtitle>
      <test-loading-bar [width]="'160px'" [height]="'1rem'"></test-loading-bar>
    </mat-card-subtitle>
    <div class="flex-spacer"></div>
    <div class="hero-actions">
      <mat-icon class="icon__like--grey">favorite</mat-icon>
    </div>
  </mat-card-header>
  <test-loading-bar [height]="'486px'"></test-loading-bar>
</mat-card> `,
  styles: 
  [`.hero-header__image {
    background: #bbbbbb;}`]
})
export class HeroLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
