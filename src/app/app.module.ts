import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { NotesService } from '../services/api/notes-services';
import { AuthService} from '../services/api/auth-service';
import { DetailNote} from '../pages/detail-note/detail-note';
import { Storage } from '@ionic/storage';
import { PrefService} from '../services/local/pref-service';
import { DBService } from '../services/local/db-service';
import { UserService} from '../services/api/user-service';
import { ClickOutsideModule } from 'ng-click-outside';
import { NoteManager} from '../manager/note-manager';

@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    AccountPage,
    TabsPage,
    DetailNote
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ClickOutsideModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    AccountPage,
    TabsPage,
    DetailNote
  ],
  providers: [NotesService, AuthService, Storage, PrefService, UserService, DBService,NoteManager]
})
export class AppModule { }
