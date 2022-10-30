import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
