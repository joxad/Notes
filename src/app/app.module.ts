import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { NotesService } from '../services/notes-services';
import { AuthService} from '../services/auth-service';
import { DetailNote} from '../pages/detail-note/detail-note';
import { RemindPage} from '../pages/reminder/page-remind';
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
    NotesPage,
    AccountPage,
    TabsPage,
    DetailNote,
    RemindPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    AccountPage,
    TabsPage,
    DetailNote,
    RemindPage
  ],
  providers: [NotesService, AuthService]
})
export class AppModule { }
