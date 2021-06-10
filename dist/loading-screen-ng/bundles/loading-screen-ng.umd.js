(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('test-loading-bar'), require('@angular/common'), require('@angular/router'), require('@angular/material/card'), require('@angular/material/icon')) :
  typeof define === 'function' && define.amd ? define('loading-screen-ng', ['exports', '@angular/core', 'test-loading-bar', '@angular/common', '@angular/router', '@angular/material/card', '@angular/material/icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['loading-screen-ng'] = {}, global.ng.core, global.i1, global.ng.common, global.ng.router, global.ng.material.card, global.ng.material.icon));
}(this, (function (exports, i0, i1, i1$2, i1$1, i1$3, i3) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
  var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
  var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
  var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
  var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

  var SpinnerComponent = /** @class */ (function () {
      function SpinnerComponent() {
      }
      SpinnerComponent.prototype.ngOnInit = function () {
      };
      return SpinnerComponent;
  }());
  SpinnerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SpinnerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SpinnerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: SpinnerComponent, selector: "spinner", ngImport: i0__namespace, template: "<div class=\"spinner\"></div>", isInline: true, styles: [".spinner {\n    width: 40px;\n    height: 40px;\n    background-color: #333;\n  \n    border-radius: 100%;\n    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n    animation: sk-scaleout 1.0s infinite ease-in-out;\n  \n    transform: translate(-50%, -50%);\n    position: absolute;\n    left: 50%;\n    top: 48%;\n  }\n  \n  @-webkit-keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0)\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n      opacity: 0;\n    }\n  }"] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SpinnerComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'spinner',
                      template: "<div class=\"spinner\"></div>",
                      styles: [".spinner {\n    width: 40px;\n    height: 40px;\n    background-color: #333;\n  \n    border-radius: 100%;\n    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n    animation: sk-scaleout 1.0s infinite ease-in-out;\n  \n    transform: translate(-50%, -50%);\n    position: absolute;\n    left: 50%;\n    top: 48%;\n  }\n  \n  @-webkit-keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0)\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n      opacity: 0;\n    }\n  }"]
                  }]
          }], ctorParameters: function () { return []; } });

  var LoadingScreenNgComponent = /** @class */ (function () {
      function LoadingScreenNgComponent() {
          this.choice = 1;
      }
      LoadingScreenNgComponent.prototype.ngOnInit = function () {
      };
      return LoadingScreenNgComponent;
  }());
  LoadingScreenNgComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  LoadingScreenNgComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: LoadingScreenNgComponent, selector: "loading-screen-ng", inputs: { choice: "choice" }, ngImport: i0__namespace, template: "\n  <!--<hero-loading></hero-loading>-->\n  <test-loading-bar [width]=\"'200px'\" [height]=\"'1rem'\"></test-loading-bar>\n  <spinner></spinner>\n  ", isInline: true, components: [{ type: i1__namespace.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: SpinnerComponent, selector: "spinner" }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'loading-screen-ng',
                      template: "\n  <!--<hero-loading></hero-loading>-->\n  <test-loading-bar [width]=\"'200px'\" [height]=\"'1rem'\"></test-loading-bar>\n  <spinner></spinner>\n  ",
                      styles: []
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { choice: [{
                  type: i0.Input
              }] } });

  var routes = [];
  var SharedRoutingModule = /** @class */ (function () {
      function SharedRoutingModule() {
      }
      return SharedRoutingModule;
  }());
  SharedRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  SharedRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
  SharedRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedRoutingModule, imports: [[i1$1.RouterModule.forChild(routes)], i1$1.RouterModule] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedRoutingModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      imports: [i1$1.RouterModule.forChild(routes)],
                      exports: [i1$1.RouterModule]
                  }]
          }] });

  var LoadingPlaceholderComponent = /** @class */ (function () {
      function LoadingPlaceholderComponent() {
      }
      LoadingPlaceholderComponent.prototype.ngOnInit = function () {
      };
      return LoadingPlaceholderComponent;
  }());
  LoadingPlaceholderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingPlaceholderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  LoadingPlaceholderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: LoadingPlaceholderComponent, selector: "loading-placeholder", inputs: { height: "height", width: "width" }, ngImport: i0__namespace, template: "<div class=\"placeholder-animation\"\n    [ngStyle]=\"{'height': height, 'width': width}\">\n   </div>", isInline: true, styles: ["@keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0\n    }\n    100% {\n      background-position: 468px 0\n    }\n  }\n  \n  .placeholder-animation {\n    animation-duration: 1.25s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: placeHolderShimmer;\n    animation-timing-function: linear;\n    background: darkgray;\n    background: linear-gradient(to right, #bbbbbb 10%, #dddddd 18%, #eeeeee 33%);\n    position: relative;\n    background-size: 1000px 100px\n  }"], directives: [{ type: i1__namespace$2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingPlaceholderComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'loading-placeholder',
                      template: "<div class=\"placeholder-animation\"\n    [ngStyle]=\"{'height': height, 'width': width}\">\n   </div>",
                      styles: ["@keyframes placeHolderShimmer {\n    0% {\n      background-position: -468px 0\n    }\n    100% {\n      background-position: 468px 0\n    }\n  }\n  \n  .placeholder-animation {\n    animation-duration: 1.25s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: placeHolderShimmer;\n    animation-timing-function: linear;\n    background: darkgray;\n    background: linear-gradient(to right, #bbbbbb 10%, #dddddd 18%, #eeeeee 33%);\n    position: relative;\n    background-size: 1000px 100px\n  }"]
                  }]
          }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                  type: i0.Input
              }], width: [{
                  type: i0.Input
              }] } });

  var HeroLoadingComponent = /** @class */ (function () {
      function HeroLoadingComponent() {
      }
      HeroLoadingComponent.prototype.ngOnInit = function () {
      };
      return HeroLoadingComponent;
  }());
  HeroLoadingComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: HeroLoadingComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  HeroLoadingComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: HeroLoadingComponent, selector: "hero-loading", ngImport: i0__namespace, template: "<mat-card id=\"loading-card\" class=\"hero-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"hero-header__image\"></div>\n    <mat-card-title>\n      <test-loading-bar [width]=\"'200px'\" [height]=\"'1rem'\"></test-loading-bar>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <test-loading-bar [width]=\"'160px'\" [height]=\"'1rem'\"></test-loading-bar>\n    </mat-card-subtitle>\n    <div class=\"flex-spacer\"></div>\n    <div class=\"hero-actions\">\n      <mat-icon class=\"icon__like--grey\">favorite</mat-icon>\n    </div>\n  </mat-card-header>\n  <test-loading-bar [height]=\"'486px'\"></test-loading-bar>\n</mat-card> ", isInline: true, styles: [".hero-header__image {\n    background: #bbbbbb;}"], components: [{ type: i1__namespace$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1__namespace$3.MatCardHeader, selector: "mat-card-header" }, { type: i1__namespace.TestLoadingBarComponent, selector: "test-loading-bar", inputs: ["height", "width"] }, { type: i3__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1__namespace$3.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1__namespace$3.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1__namespace$3.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: HeroLoadingComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'hero-loading',
                      template: "<mat-card id=\"loading-card\" class=\"hero-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"hero-header__image\"></div>\n    <mat-card-title>\n      <test-loading-bar [width]=\"'200px'\" [height]=\"'1rem'\"></test-loading-bar>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <test-loading-bar [width]=\"'160px'\" [height]=\"'1rem'\"></test-loading-bar>\n    </mat-card-subtitle>\n    <div class=\"flex-spacer\"></div>\n    <div class=\"hero-actions\">\n      <mat-icon class=\"icon__like--grey\">favorite</mat-icon>\n    </div>\n  </mat-card-header>\n  <test-loading-bar [height]=\"'486px'\"></test-loading-bar>\n</mat-card> ",
                      styles: [".hero-header__image {\n    background: #bbbbbb;}"]
                  }]
          }], ctorParameters: function () { return []; } });

  var SharedModule = /** @class */ (function () {
      function SharedModule() {
      }
      return SharedModule;
  }());
  SharedModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  SharedModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedModule, declarations: [SpinnerComponent,
          LoadingPlaceholderComponent,
          HeroLoadingComponent], imports: [i1$2.CommonModule,
          SharedRoutingModule,
          i1$3.MatCardModule,
          i3.MatIconModule,
          i1.TestLoadingBarModule], exports: [SpinnerComponent,
          LoadingPlaceholderComponent,
          HeroLoadingComponent,
          i3.MatIconModule,
          i1$3.MatCardModule] });
  SharedModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedModule, imports: [[
              i1$2.CommonModule,
              SharedRoutingModule,
              i1$3.MatCardModule,
              i3.MatIconModule,
              i1.TestLoadingBarModule
          ], i3.MatIconModule,
          i1$3.MatCardModule] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: SharedModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          SpinnerComponent,
                          LoadingPlaceholderComponent,
                          HeroLoadingComponent
                      ],
                      imports: [
                          i1$2.CommonModule,
                          SharedRoutingModule,
                          i1$3.MatCardModule,
                          i3.MatIconModule,
                          i1.TestLoadingBarModule
                      ],
                      exports: [
                          SpinnerComponent,
                          LoadingPlaceholderComponent,
                          HeroLoadingComponent,
                          i3.MatIconModule,
                          i1$3.MatCardModule
                      ]
                  }]
          }] });

  var LoadingScreenNgModule = /** @class */ (function () {
      function LoadingScreenNgModule() {
      }
      return LoadingScreenNgModule;
  }());
  LoadingScreenNgModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  LoadingScreenNgModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgModule, declarations: [LoadingScreenNgComponent], imports: [SharedModule,
          i1.TestLoadingBarModule], exports: [LoadingScreenNgComponent,
          SharedModule,
          SpinnerComponent,
          LoadingPlaceholderComponent,
          HeroLoadingComponent] });
  LoadingScreenNgModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgModule, imports: [[
              SharedModule,
              i1.TestLoadingBarModule
          ], SharedModule] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: LoadingScreenNgModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          LoadingScreenNgComponent,
                      ],
                      imports: [
                          SharedModule,
                          i1.TestLoadingBarModule
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

  exports.HeroLoadingComponent = HeroLoadingComponent;
  exports.LoadingPlaceholderComponent = LoadingPlaceholderComponent;
  exports.LoadingScreenNgComponent = LoadingScreenNgComponent;
  exports.LoadingScreenNgModule = LoadingScreenNgModule;
  exports.SharedModule = SharedModule;
  exports.SpinnerComponent = SpinnerComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=loading-screen-ng.umd.js.map
