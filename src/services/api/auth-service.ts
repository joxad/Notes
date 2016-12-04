import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {BaseService} from './base-service';

@Injectable()
export class AuthService extends BaseService{
  private authUrl = "signup";
  private authLocalIn = "auth/local";

  data: any;
  constructor(protected http: Http) {
    super(http);
  }

  signupUser(newEmail: string, newPassword: string) {
    return this.post(this.authUrl, {email:newEmail, password:newPassword}).map(res => res.json());
  }
  
  signInLocal(email: string, password: string) {
    return this.post(this.authLocalIn, {email:email, password:password}).map(res => res.json());
  }
}
