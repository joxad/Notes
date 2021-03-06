import { Component } from '@angular/core';

import { NotesPage } from '../notes/notes';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NotesPage;
  tab2Root: any = AccountPage;

  constructor() {

  }
}
