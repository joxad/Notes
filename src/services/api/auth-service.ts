import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {BaseService} from './base-service';
import {PrefService} from '../local/pref-service';

@Injectable()
export class AuthService extends BaseService {
  private authUrl = "signup";
  private authLocalIn = "auth/local";

  data: any;
  constructor(protected http: Http, protected pref: PrefService) {
    super(http,pref);
  }

  signupUser(newEmail: string, newPassword: string) {
    return this.post(this.authUrl, { email: newEmail, password: newPassword })
      .map(res => {
        return res.json();
      });
  }

  signInLocal(email: string, password: string) {
    return this.post(this.authLocalIn, { email: email, password: password })
      .map(res => {
        let data = res.json();
        this.pref.token(data.token);
        this.pref.userId(data.data._id);
        return data;
      });
  }


}
