import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {BaseService} from './base-service';
import {PrefService} from '../local/pref-service';

@Injectable()
export class UserService extends BaseService {
  private userUrl = "users/";

  constructor(protected http: Http, protected pref : PrefService) {
    super(http,pref);
  }

  me() {
    return this.get(this.userUrl+this.pref.getUserId()).map(res => res.json());
  }
}
