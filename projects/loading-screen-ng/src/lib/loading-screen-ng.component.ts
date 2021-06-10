import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-screen-ng',
  template: `
  <!--<hero-loading></hero-loading>-->
  <test-loading-bar [width]="'200px'" [height]="'1rem'"></test-loading-bar>
  <spinner></spinner>
  `,
  styles: [
  ]
})
export class LoadingScreenNgComponent implements OnInit {
  @Input() choice: number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
