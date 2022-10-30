import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { USERS } from 'src/json/users';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UserTableComponent implements OnInit {
  @Input() users: unknown;

  userList$ = new BehaviorSubject<Nullable<User[]>>(null);

  constructor() { }

  ngOnInit(): void {
    const users: User[] = (this.users as []).map((item) => new User(item));

    this.userList$.next(users);
  }
}

type Nullable<T> = T | null;
