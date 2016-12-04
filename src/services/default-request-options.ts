import {BaseRequestOptions,HttpModule, Http,RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import {PrefService} from './pref-service';
import {Inject} from '@angular/core';
import {bootstrap} from '@angular/platform-browser/browser';

import {App} from './myapp';

export class DefaultRequestOptions extends BaseRequestOptions {

  constructor(@Inject('webApiBaseUrl') private webApiBaseUrl:string, private pref: PrefService) {
    super();
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    options.url = this.webApiBaseUrl + options.url;

    options.headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (this.pref.getToken())
      options.headers.append('Authentification', 'Bearer ' + this.pref.getToken());
    return super.merge(options);
  }
}
