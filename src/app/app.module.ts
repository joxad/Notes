import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import { NotesService } from '../services/notes-services';
import {AccountPage} from '../pages/account/account';
import { AngularFireModule } from 'angularfire2';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDr3-a2rqeDpv-o2-A8o9f2_pgv0xTCA5w",
  authDomain: "notes-b3ab6.firebaseapp.com",
  databaseURL: "https://notes-b3ab6.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "497427015271"
};


@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    NotesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    NotesPage,
    TabsPage
  ],
  providers: [NotesService]
})
export class AppModule { }
