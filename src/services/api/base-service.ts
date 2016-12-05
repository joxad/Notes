import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {PrefService} from '../local/pref-service';

const URL = "http://localhost:3030/";

export class BaseService {
  protected headers: any;
  protected options: any;

  constructor(protected http: Http, protected pref: PrefService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    if (this.pref.getToken()) {
      this.headers.append('Authorization',"Bearer "+this.pref.getToken());
    }
    this.options = new RequestOptions({ headers: this.headers });

     // Create a request option
  }

  get(url: string) {
    return this.http.get(URL+url, this.options);
  }
  post(url: string, body: any) {
    return this.http.post(URL + url, body, this.options);
  }
  put(url: string, body: any) {
    return this.http.put(URL + url, body, this.options);
  }
  delete(url: string, body: any) {
    return this.http.delete(URL + url, this.options);
  }
}