import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { FilterByNamePipe } from './filter-by-name.pipe';


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
