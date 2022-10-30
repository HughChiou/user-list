import { parseJSON } from 'date-fns';

export class User {
  name: string;
  age: number;
  registered: Date;
  email: string;
  balance: number;

  constructor(input: unknown) {
    this.name = (input as { name: string }).name;
    this.age = (input as { age: number }).age;
    this.registered = this.parseJSONDate((input as { registered: string }).registered);
    this.email = (input as { email: string }).email;
    this.balance = this.parseCurrency((input as { balance: string }).balance);
  }

  private parseCurrency(currency: string): number {
    return Number(currency.replace(/[^0-9.-]+/g, ""))
  }

  private parseJSONDate(date: string): Date {
    return parseJSON(date);
  }
}

export type Nullable<T> = T | null;
