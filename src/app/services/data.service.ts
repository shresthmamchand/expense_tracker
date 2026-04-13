import { Injectable } from '@angular/core';

export interface Expense {
  id: number;
  name: string;
  category: string;
  amount: number;
  paymentMode: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private STORAGE_KEY = 'expenses_data';

  getExpenses(): Expense[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveExpense(expense: Expense) {
    const expenses = this.getExpenses();
    expenses.push({ ...expense, id: Date.now() });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(expenses));
  }

  deleteExpense(id: number) {
    const expenses = this.getExpenses().filter(e => e.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(expenses));
  }
}