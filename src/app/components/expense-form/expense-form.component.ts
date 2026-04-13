import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-form',
  standalone: false,
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;
  categories = ['Food', 'Bills', 'Shopping', 'Travel'];

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      category: ['Food', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      paymentMode: ['Card', Validators.required]
    });
  }

  addCategory(newCat: string) {
    if (newCat && !this.categories.includes(newCat)) {
      this.categories.push(newCat);
    }
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this.ds.saveExpense(this.expenseForm.value);
      this.router.navigate(['/dashboard']);
    }
  }
}