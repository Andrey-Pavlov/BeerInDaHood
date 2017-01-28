import { Injectable, ErrorHandler, Inject } from '@angular/core';
import { LogErrorService } from './log-error-service';

export interface LoggingErrorHandlerOptions {
  rethrowError: boolean;
  unwrapError: boolean;
}

export let LOGGING_ERROR_HANDLER_OPTIONS: LoggingErrorHandlerOptions = {
  rethrowError: true,
  unwrapError: false
};

@Injectable()
export class LoggingErrorHandler implements ErrorHandler {
  private options: LoggingErrorHandlerOptions;

  constructor(private errorLogService: LogErrorService) {
    this.errorLogService = errorLogService;
    this.options = LOGGING_ERROR_HANDLER_OPTIONS;
  }

  public handleError(error: Error) {

    this.options.unwrapError
      ? this.errorLogService.logError(this.findOriginalError(error))
      : this.errorLogService.logError(error);

    if (this.options.rethrowError) {
      throw error;
    }
  }

  // If we wrapped exception
  private findOriginalError(error: any): any {

    if (error.originalError) {
      error = error.originalError;
    }

    return error;
  }

}

export function loggingErrorHandlerOptions() {
  return {
    rethrowError: true,
    unwrapError: false
  };
}

// Collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
export let LOGGING_ERROR_HANDLER_PROVIDERS = [
  {
    provide: ErrorHandler,
    useClass: LoggingErrorHandler
  }
];
