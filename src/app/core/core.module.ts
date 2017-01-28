import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import {LOGGING_ERROR_HANDLER_PROVIDERS} from './error-handling/logging-error-handler';
import {LogErrorService} from './error-handling/log-error-service';
import {GlobalLoadingService} from '../shared/loading/global-loading.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './guards/auth.guard';
import {DefaultTitleGuard} from './guards/default-title.guard';
import {APP_CONFIG, APP_CONFIG_VALUE} from '../app.config';

export function appConfigValueFactory() {
  return APP_CONFIG_VALUE;
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: APP_CONFIG, useFactory: appConfigValueFactory},
        // Error handling
        LogErrorService,
        LOGGING_ERROR_HANDLER_PROVIDERS,
        GlobalLoadingService,
        AuthService,
        AuthGuard,
        DefaultTitleGuard
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
