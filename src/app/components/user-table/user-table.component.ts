import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FilterByNamePipe } from 'src/app/filter-by-name.pipe';
import { Nullable, User } from 'src/model/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByNamePipe]
})
export class UserTableComponent implements OnInit {
  @Input() users: unknown;
  filterText: string = '';

  userList$ = new BehaviorSubject<Nullable<User[]>>(null);

  constructor() { }

  ngOnInit(): void {
    const users: User[] = (this.users as []).map((item) => new User(item));

    this.userList$.next(users);
  }
}

