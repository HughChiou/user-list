import { Component, OnInit } from '@angular/core';
import { parse, parseJSON } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { USERS } from 'src/json/users';
import { User } from 'src/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-list';
  users: unknown;

  constructor() {
    this.users = USERS;
  }
}




