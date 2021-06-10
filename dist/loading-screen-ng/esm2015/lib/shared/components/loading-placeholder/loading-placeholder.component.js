import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LoadingPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPlaceholderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingPlaceholderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: LoadingPlaceholderComponent, selector: "loading-placeholder", inputs: { height: "height", width: "width" }, ngImport: i0, template: `<div class="placeholder-animation"
    [ngStyle]="{'height': height, 'width': width}">
   </div>`, isInline: true, styles: ["@keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0\n    }\n    100% {\n      background-position: 468px 0\n    }\n  }\n  \n  .placeholder-animation {\n    animation-duration: 1.25s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: placeHolderShimmer;\n    animation-timing-function: linear;\n    background: darkgray;\n    background: linear-gradient(to right, #bbbbbb 10%, #dddddd 18%, #eeeeee 33%);\n    position: relative;\n    background-size: 1000px 100px\n  }"], directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingPlaceholderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'loading-placeholder',
                    template: `<div class="placeholder-animation"
    [ngStyle]="{'height': height, 'width': width}">
   </div>`,
                    styles: [`@keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }
  
  .placeholder-animation {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #bbbbbb 10%, #dddddd 18%, #eeeeee 33%);
    position: relative;
    background-size: 1000px 100px
  }`]
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                type: Input
            }], width: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9sb2FkaW5nLXNjcmVlbi1uZy9zcmMvbGliL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctcGxhY2Vob2xkZXIvbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQStCekQsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7d0hBUFUsMkJBQTJCOzRHQUEzQiwyQkFBMkIseUdBekJ0Qzs7VUFFUTsyRkF1QkcsMkJBQTJCO2tCQTVCdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQ1I7O1VBRVE7b0JBQ1IsTUFBTSxFQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkEsQ0FBQztpQkFDSjswRUFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9hZGluZy1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlOiBcbiAgYDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1hbmltYXRpb25cIlxuICAgIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaGVpZ2h0LCAnd2lkdGgnOiB3aWR0aH1cIj5cbiAgIDwvZGl2PmAsXG4gIHN0eWxlczpcbiAgIFtgQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxuICBcbiAgLnBsYWNlaG9sZGVyLWFuaW1hdGlvbiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiYmJiYmIgMTAlLCAjZGRkZGRkIDE4JSwgI2VlZWVlZSAzMyUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAxMDBweFxuICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1BsYWNlaG9sZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaGVpZ2h0ITogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aCE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==