import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { HeroLoadingComponent } from './components/hero-loading/hero-loading.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TestLoadingBarModule } from 'test-loading-bar';
import * as i0 from "@angular/core";
export class SharedModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xvYWRpbmctc2NyZWVuLW5nL3NyYy9saWIvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7QUF1QnZELE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBbkJyQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLG9CQUFvQixhQUdwQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixhQUFhO1FBQ2Isb0JBQW9CLGFBR3BCLGdCQUFnQjtRQUNoQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixhQUFhOzBHQUdKLFlBQVksWUFmZDtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWE7WUFDYixvQkFBb0I7U0FDckIsRUFLQyxhQUFhO1FBQ2IsYUFBYTsyRkFHSixZQUFZO2tCQXJCeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQiwyQkFBMkI7d0JBQzNCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2Isb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFDYixhQUFhO3FCQUNkO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNoYXJlZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmctcGxhY2Vob2xkZXIvbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb0xvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVyby1sb2FkaW5nL2hlcm8tbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgVGVzdExvYWRpbmdCYXJNb2R1bGV9IGZyb20gJ3Rlc3QtbG9hZGluZy1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTcGlubmVyQ29tcG9uZW50LFxuICAgIExvYWRpbmdQbGFjZWhvbGRlckNvbXBvbmVudCxcbiAgICBIZXJvTG9hZGluZ0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNoYXJlZFJvdXRpbmdNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFRlc3RMb2FkaW5nQmFyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTcGlubmVyQ29tcG9uZW50LFxuICAgIExvYWRpbmdQbGFjZWhvbGRlckNvbXBvbmVudCxcbiAgICBIZXJvTG9hZGluZ0NvbXBvbmVudCxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=