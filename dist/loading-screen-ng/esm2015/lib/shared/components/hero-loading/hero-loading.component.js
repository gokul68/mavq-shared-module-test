import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "test-loading-bar";
import * as i3 from "@angular/material/icon";
export class HeroLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroLoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: HeroLoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeroLoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: HeroLoadingComponent, selector: "hero-loading", ngImport: i0, template: `<mat-card id="loading-card" class="hero-card">
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
</mat-card> `, isInline: true, styles: [".hero-header__image {\n    background: #bbbbbb;}"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: HeroLoadingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'hero-loading',
                    template: `<mat-card id="loading-card" class="hero-card">
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
                    styles: [`.hero-header__image {
    background: #bbbbbb;}`]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvYWRpbmctc2NyZWVuLW5nL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvaGVyby1sb2FkaW5nL2hlcm8tbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUF5QmxELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2lIQUxVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLG9EQXBCL0I7Ozs7Ozs7Ozs7Ozs7OzthQWVXOzJGQUtBLG9CQUFvQjtrQkF2QmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFDUjs7Ozs7Ozs7Ozs7Ozs7O2FBZVc7b0JBQ1gsTUFBTSxFQUNOLENBQUM7MEJBQ3VCLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVyby1sb2FkaW5nJyxcbiAgdGVtcGxhdGU6IFxuICBgPG1hdC1jYXJkIGlkPVwibG9hZGluZy1jYXJkXCIgY2xhc3M9XCJoZXJvLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8ZGl2IG1hdC1jYXJkLWF2YXRhciBjbGFzcz1cImhlcm8taGVhZGVyX19pbWFnZVwiPjwvZGl2PlxuICAgIDxtYXQtY2FyZC10aXRsZT5cbiAgICAgIDx0ZXN0LWxvYWRpbmctYmFyIFt3aWR0aF09XCInMjAwcHgnXCIgW2hlaWdodF09XCInMXJlbSdcIj48L3Rlc3QtbG9hZGluZy1iYXI+XG4gICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+XG4gICAgICA8dGVzdC1sb2FkaW5nLWJhciBbd2lkdGhdPVwiJzE2MHB4J1wiIFtoZWlnaHRdPVwiJzFyZW0nXCI+PC90ZXN0LWxvYWRpbmctYmFyPlxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgtc3BhY2VyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhlcm8tYWN0aW9uc1wiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiaWNvbl9fbGlrZS0tZ3JleVwiPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDx0ZXN0LWxvYWRpbmctYmFyIFtoZWlnaHRdPVwiJzQ4NnB4J1wiPjwvdGVzdC1sb2FkaW5nLWJhcj5cbjwvbWF0LWNhcmQ+IGAsXG4gIHN0eWxlczogXG4gIFtgLmhlcm8taGVhZGVyX19pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogI2JiYmJiYjt9YF1cbn0pXG5leHBvcnQgY2xhc3MgSGVyb0xvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19