import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, URLSearchParams} from "@angular/http";

@Injectable()
export class BeerBaseService {
  constructor() {
  }

protected createQueryString(query: any): string {
  query = query || {};

  query.key = 'ab36132bcf3c7560f1ca1056bcb33252';

  let params: URLSearchParams = new URLSearchParams();
  for(let key of Object.keys(query)){
    params.set(key, query[key]);
  }

  return params.toString();
}
}
