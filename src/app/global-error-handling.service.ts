import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    const loggingService = this.injector.get(LoggingService);
    // Log the error
    loggingService.logError('An error occurred: ' + error.message);

    // Additional error handling logic (e.g., user notification)
  }
}

