import { Pipe, PipeTransform } from '@angular/core';
import { Nullable, User } from 'src/model/user';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(users: Nullable<User[]>, filterName: string): Nullable<User[]> {
    if (!filterName) {
      return users;
    }

    return users?.filter(item => item.name.includes(filterName)) as User[];
  }

}
