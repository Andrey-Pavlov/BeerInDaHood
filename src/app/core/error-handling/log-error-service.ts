import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class LogErrorService {

  constructor(private http: Http) {
    this.http = http;
  }

  public logError(error: Error): void {

    // Internal tracking.
    this.sendToConsole(error);
    this.sendToServer(error);

    // Software-as-a-Service (SaaS) tracking.
    this.sendToNewRelic(error);
  }

  private sendToConsole(error: Error) {
      console.error(error);
      console.error(error.message);
      console.error(error.stack);
  }

  private sendToNewRelic(error: Error): void {
    // Read more: https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-apis/report-data-events-browser-agent-api
    // newrelic.noticeError(error);
  }

  private sendToSentry(error: Error): void {
  }

  private sendToServer(error: Error): void {

    this.http
      .post('url',
        {
          type: error.name,
          message: error.message,
          stack: error.stack,
          location: window.location.href
        }
      )
      .subscribe(
        (httpResponse: Response): void => {
        },
        (httpError: any): void => {

          // NOTE: We know this will fail
          // --
          // console.log( "Http error:", httpError );
        }
      );
  }
}
