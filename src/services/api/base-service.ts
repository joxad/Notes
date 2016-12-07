import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {PrefService} from '../local/pref-service';

const URL = "http://localhost:3030/";

export class BaseService {
  constructor(protected http: Http, protected pref: PrefService) {
     // Create a request option
  }

  headers() {
    let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    if (this.pref.getToken()) {
      headers.append('Authorization',"Bearer "+this.pref.getToken());
    }
    let options = new RequestOptions({ headers: headers });
    return options;
  }
  get(url: string) {
    return this.http.get(URL+url, this.headers());
  }
  post(url: string, body: any) {
    return this.http.post(URL + url, body, this.headers());
  }
  put(url: string, body: any) {
    return this.http.put(URL + url, body, this.headers());
  }
  delete(url: string) {
    return this.http.delete(URL + url, this.headers());
  }
}
