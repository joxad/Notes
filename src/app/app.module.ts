import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { NotesService } from '../services/notes-services';
import { AuthService} from '../services/auth-service';
import { DetailNote} from '../pages/detail-note/detail-note';
import { Storage } from '@ionic/storage';
import { PrefService} from '../services/pref-service';


@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    AccountPage,
    TabsPage,
    DetailNote
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
    DetailNote
  ],
  providers: [NotesService, AuthService, Storage, PrefService]
})
export class AppModule { }
