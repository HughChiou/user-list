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
export class AppComponent implements OnInit {
  title = 'user-list';
  userList$ = new BehaviorSubject<Nullable<User[]>>(null);

  constructor() { }

  ngOnInit(): void {
    const users: User[] = USERS.map((item) => new User(item));

    this.userList$.next(users);
  }


}

type Nullable<T> = T | null;


