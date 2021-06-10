import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from 'test-loading-bar';
import { TestLoadingBarModule } from 'test-loading-bar';
import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$3 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: SpinnerComponent, selector: "spinner", ngImport: i0, template: `<div class="spinner"></div>`, isInline: true, styles: [".spinner {\n    width: 40px;\n    height: 40px;\n    background-color: #333;\n  \n    border-radius: 100%;\n    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n    animation: sk-scaleout 1.0s infinite ease-in-out;\n  \n    transform: translate(-50%, -50%);\n    position: absolute;\n    left: 50%;\n    top: 48%;\n  }\n  \n  @-webkit-keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0)\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n      opacity: 0;\n    }\n  }"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'spinner',
                    template: `<div class="spinner"></div>`,
                    styles: [`.spinner {
    width: 40px;
    height: 40px;
    background-color: #333;
  
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
  
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 48%;
  }
  
  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0)
    }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }
  
  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
  }`]
                }]
        }], ctorParameters: function () { return []; } });

class LoadingScreenNgComponent {
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
  `, isInline: true, components: [{ type: i1.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: SpinnerComponent, selector: "spinner" }] });
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

const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
SharedRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class LoadingPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPlaceholderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingPlaceholderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: LoadingPlaceholderComponent, selector: "loading-placeholder", inputs: { height: "height", width: "width" }, ngImport: i0, template: `<div class="placeholder-animation"
    [ngStyle]="{'height': height, 'width': width}">
   </div>`, isInline: true, styles: ["@keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0\n    }\n    100% {\n      background-position: 468px 0\n    }\n  }\n  \n  .placeholder-animation {\n    animation-duration: 1.25s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: placeHolderShimmer;\n    animation-timing-function: linear;\n    background: darkgray;\n    background: linear-gradient(to right, #bbbbbb 10%, #dddddd 18%, #eeeeee 33%);\n    position: relative;\n    background-size: 1000px 100px\n  }"], directives: [{ type: i1$2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
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

class HeroLoadingComponent {
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
</mat-card> `, isInline: true, styles: [".hero-header__image {\n    background: #bbbbbb;}"], components: [{ type: i1$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1$3.MatCardHeader, selector: "mat-card-header" }, { type: i1.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1$3.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1$3.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1$3.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
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

class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedModule, declarations: [SpinnerComponent,
        LoadingPlaceholderComponent,
        HeroLoadingComponent], imports: [CommonModule,
        SharedRoutingModule,
        MatCardModule,
        MatIconModule,
        TestLoadingBarModule], exports: [SpinnerComponent,
        LoadingPlaceholderComponent,
        HeroLoadingComponent,
        MatIconModule,
        MatCardModule] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedModule, imports: [[
            CommonModule,
            SharedRoutingModule,
            MatCardModule,
            MatIconModule,
            TestLoadingBarModule
        ], MatIconModule,
        MatCardModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SpinnerComponent,
                        LoadingPlaceholderComponent,
                        HeroLoadingComponent
                    ],
                    imports: [
                        CommonModule,
                        SharedRoutingModule,
                        MatCardModule,
                        MatIconModule,
                        TestLoadingBarModule
                    ],
                    exports: [
                        SpinnerComponent,
                        LoadingPlaceholderComponent,
                        HeroLoadingComponent,
                        MatIconModule,
                        MatCardModule
                    ]
                }]
        }] });

class LoadingScreenNgModule {
}
LoadingScreenNgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoadingScreenNgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgModule, declarations: [LoadingScreenNgComponent], imports: [SharedModule,
        TestLoadingBarModule], exports: [LoadingScreenNgComponent,
        SharedModule,
        SpinnerComponent,
        LoadingPlaceholderComponent,
        HeroLoadingComponent] });
LoadingScreenNgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgModule, imports: [[
            SharedModule,
            TestLoadingBarModule
        ], SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: LoadingScreenNgModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadingScreenNgComponent,
                    ],
                    imports: [
                        SharedModule,
                        TestLoadingBarModule
                    ],
                    exports: [
                        LoadingScreenNgComponent,
                        SharedModule,
                        SpinnerComponent,
                        LoadingPlaceholderComponent,
                        HeroLoadingComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of loading-screen-ng
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeroLoadingComponent, LoadingPlaceholderComponent, LoadingScreenNgComponent, LoadingScreenNgModule, SharedModule, SpinnerComponent };
//# sourceMappingURL=loading-screen-ng.js.map
