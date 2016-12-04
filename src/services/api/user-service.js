import {Injectable } from '@angular/core';
import {PrefService} from 'pref-service';
@Injectable()
export class UserService {
  private userUrlId = "users/{id}"
  private userUrl = "users";

  constructor(protected pref : PrefService) {

  }

  me() {
    return this.get(usersUrlId.format(pref.userId()));
  }
}
