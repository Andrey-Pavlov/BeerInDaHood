import { AppConfig } from '../../interfaces/config/app-config.interface';
import {URLSearchParams} from '@angular/http';

export class BaseConfigService {
  protected baseUrl: string;

  constructor(protected config: AppConfig) {
    this.baseUrl = config.endpoint;
  }

  protected createUrl(path: string, queryString?: string): string {
    let url = '{0}{1}'.format(this.baseUrl, path);

    if(queryString) {
      url = url + '?' + queryString;
    }

    return url;
  }

  protected createQueryString(query: any): string {
    query = query || {};

    let params: URLSearchParams = new URLSearchParams();
    for(let key of Object.keys(query)){
      params.set(key, query[key]);
    }

    return params.toString();
  }
}
