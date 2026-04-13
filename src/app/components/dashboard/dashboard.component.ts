import { Component, OnInit } from '@angular/core';
import { DataService, Expense } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expenses: Expense[] = [];
  totalSpent = 0;
  spendingTarget = 3000;
  savingsTarget = 1000;

  constructor(private ds: DataService) {}

  ngOnInit() { this.refresh(); }

  refresh() {
    this.expenses = this.ds.getExpenses();
    this.totalSpent = this.expenses.reduce((s, e) => s + e.amount, 0);
  }

  delete(id: number) {
    this.ds.deleteExpense(id);
    this.refresh();
  }
}