import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { __values } from 'tslib';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'sundays-component',
  templateUrl: './sundays.component.html',
})
export class SundaysComponent implements OnInit {
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dateRange = this.formBuilder.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    });

    this.dateRange.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        this.calculateSundays();
      });
  }

  calculateSundays(): void {
    const startDate = new Date(this.dateRange.value.start);
    const endDate = new Date(this.dateRange.value.end);

    if (!this.isValidDateRange(startDate, endDate)) {
      this.result = null;
      return;
    }

    const sundaysCount = this.countSundays(startDate, endDate);
    this.result = sundaysCount;
    this.errorMessage = null;
  }

  isValidDateRange(startDate: Date, endDate: Date): boolean {
    if (!startDate || !endDate) {
      return false;
    }

    if (
      endDate < startDate ||
      endDate.getFullYear() - startDate.getFullYear() < 2
    ) {
      this.errorMessage = 'Dates must be at least two years apart';
      return false;
    }

    if (startDate.getDay() === 0 || startDate < new Date()) {
      this.errorMessage =
        'The start must be in the future and cannot be a sunday';
      return false;
    }
    this.errorMessage = 'Please select valid dates.';
    return true;
  }

  countSundays(startDate: Date, endDate: Date): number {
    let count = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      if (currentDate.getDay() === 0 && currentDate.getDate() < 28) {
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
  }
}
