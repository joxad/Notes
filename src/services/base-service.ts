import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class BaseService {
  protected authUrl = "http://localhost:3030/signup";

  protected authLocalIn = "http://localhost:3030/auth/local";

  protected headers: any;
  protected options: any;
  data: any;
  constructor(protected http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    this.options = new RequestOptions({ headers: this.headers }); // Create a request option

  }

  signupUser(newEmail: string, newPassword: string) {
    return this.http.post(this.authUrl, {email:newEmail, password:newPassword}, this.options).map(res => res.json());
  }

  signInLocal(email: string, password: string) {
    return this.http.post(this.authLocalIn, {email:email, password:password}, this.options).map(res => res.json());
  }
}
