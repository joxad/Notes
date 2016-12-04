import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class PrefService {
  tok : string;
  uId : string;
  constructor(private storage: Storage) {
    this.storage.get("token").then(token => this.tok = token);
  }

  token(token : string) {
    this.storage.set("token", token);
    this.tok = token;
  }
  userId(id : string) {
    this.storage.set("userId", id);
    this.uId = id;
  }

  getToken() {
    return this.tok;
  }

  getUserId() {
    return this.uId;
  }

}
