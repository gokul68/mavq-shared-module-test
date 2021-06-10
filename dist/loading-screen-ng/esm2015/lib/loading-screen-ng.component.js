import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "test-loading-bar";
import * as i2 from "./shared/components/spinner/spinner.component";
export class LoadingScreenNgComponent {
    constructor() {
        this.choice = 1;
    }
    ngOnInit() {
    }
}
LoadingScreenNgComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingScreenNgComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: LoadingScreenNgComponent, selector: "loading-screen-ng", inputs: { choice: "choice" }, ngImport: i0, template: `
  <!--<hero-loading></hero-loading>-->
  <test-loading-bar [width]="'200px'" [height]="'1rem'"></test-loading-bar>
  <spinner></spinner>
  `, isInline: true, components: [{ type: i1.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: i2.SpinnerComponent, selector: "spinner" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'loading-screen-ng',
                    template: `
  <!--<hero-loading></hero-loading>-->
  <test-loading-bar [width]="'200px'" [height]="'1rem'"></test-loading-bar>
  <spinner></spinner>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { choice: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY3JlZW4tbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9hZGluZy1zY3JlZW4tbmcvc3JjL2xpYi9sb2FkaW5nLXNjcmVlbi1uZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZekQsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQztRQURTLFdBQU0sR0FBUyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztxSEFMVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix1RkFSekI7Ozs7R0FJVDsyRkFJVSx3QkFBd0I7a0JBVnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7MEVBRVUsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvYWRpbmctc2NyZWVuLW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPCEtLTxoZXJvLWxvYWRpbmc+PC9oZXJvLWxvYWRpbmc+LS0+XG4gIDx0ZXN0LWxvYWRpbmctYmFyIFt3aWR0aF09XCInMjAwcHgnXCIgW2hlaWdodF09XCInMXJlbSdcIj48L3Rlc3QtbG9hZGluZy1iYXI+XG4gIDxzcGlubmVyPjwvc3Bpbm5lcj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NjcmVlbk5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hvaWNlOiBudW1iZXI9MTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=