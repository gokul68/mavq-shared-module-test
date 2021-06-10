import { NgModule } from '@angular/core';
import { LoadingScreenNgComponent } from './loading-screen-ng.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoadingPlaceholderComponent } from './shared/components/loading-placeholder/loading-placeholder.component';
import { HeroLoadingComponent } from './shared/components/hero-loading/hero-loading.component';
import { TestLoadingBarModule} from 'test-loading-bar';

@NgModule({
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
})
export class LoadingScreenNgModule { }
