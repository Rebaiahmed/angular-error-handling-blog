import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private logger: NGXLogger) { }

  logInfo(message: string): void {
    this.logger.info(message);
  }

  logWarning(message: string): void {
    this.logger.warn(message);
  }

  logError(message: string): void {
    this.logger.error(message);
  }

  logToServer(message: string): void {
    // ngx-logger handles server logging configuration
  }
}
