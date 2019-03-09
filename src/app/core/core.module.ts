import {forwardRef, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TeamInfoService} from './services/team-info.service';
import {UserInfoService} from './services/user-info.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
  exports: [
    AboutComponent, HomeComponent
  ],
  declarations: [AboutComponent, HomeComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


