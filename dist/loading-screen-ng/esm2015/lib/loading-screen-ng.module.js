import { NgModule } from '@angular/core';
import { LoadingScreenNgComponent } from './loading-screen-ng.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoadingPlaceholderComponent } from './shared/components/loading-placeholder/loading-placeholder.component';
import { HeroLoadingComponent } from './shared/components/hero-loading/hero-loading.component';
import { TestLoadingBarModule } from 'test-loading-bar';
import * as i0 from "@angular/core";
export class LoadingScreenNgModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY3JlZW4tbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9hZGluZy1zY3JlZW4tbmcvc3JjL2xpYi9sb2FkaW5nLXNjcmVlbi1uZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7O0FBa0J2RCxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBZDlCLHdCQUF3QixhQUd4QixZQUFZO1FBQ1osb0JBQW9CLGFBR3BCLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQixvQkFBb0I7bUhBR1gscUJBQXFCLFlBWnZCO1lBQ1AsWUFBWTtZQUNaLG9CQUFvQjtTQUNyQixFQUdDLFlBQVk7MkZBTUgscUJBQXFCO2tCQWhCakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7d0JBQ3hCLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQiwyQkFBMkI7d0JBQzNCLG9CQUFvQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ1NjcmVlbk5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLXNjcmVlbi1uZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1wbGFjZWhvbGRlci9sb2FkaW5nLXBsYWNlaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMvaGVyby1sb2FkaW5nL2hlcm8tbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVzdExvYWRpbmdCYXJNb2R1bGV9IGZyb20gJ3Rlc3QtbG9hZGluZy1iYXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2FkaW5nU2NyZWVuTmdDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgVGVzdExvYWRpbmdCYXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExvYWRpbmdTY3JlZW5OZ0NvbXBvbmVudCxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgU3Bpbm5lckNvbXBvbmVudCxcbiAgICBMb2FkaW5nUGxhY2Vob2xkZXJDb21wb25lbnQsXG4gICAgSGVyb0xvYWRpbmdDb21wb25lbnQsICBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NyZWVuTmdNb2R1bGUgeyB9XG4iXX0=