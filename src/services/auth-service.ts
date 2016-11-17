import {Injectable} from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  private users: any;
  constructor(private af: AngularFire) {
    this.users = firebase.database().ref('/users');
  }

  signupUser(newEmail: string, newPassword: string): any {
    return this.af.auth.createUser({ email: newEmail, password: newPassword })
      .then((newUser) => {
        this.af.auth.login({ email: newEmail, password: newPassword })
        .then((authenticatedUser) => {
          this.users.child(authenticatedUser.uid).set({
            email: newEmail,
          });
        });
       });
  }
}
