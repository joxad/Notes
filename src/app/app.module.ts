import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotesPage } from '../pages/notes/notes';
import { TabsPage } from '../pages/tabs/tabs';
import { NotesService } from '../services/notes-services';
import {AccountPage} from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    NotesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    NotesPage,
    TabsPage
  ],
  providers: [ NotesService ]
})
export class AppModule {}
