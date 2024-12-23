import { FilterPipe } from './../../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  imports :[CurrencyPipe , CommonModule , FormsModule , FilterPipe]
})
export class ReportsComponent implements OnInit {
  searchTerm: string = '';
  reports = [
    { title: 'Bonus for Project A', reason: 'Performance', amount: 5000, status: 'Approved', date: new Date('2024-12-01') },
    { title: 'Bonus for Project B', reason: 'Completion', amount: 3000, status: 'Pending', date: new Date('2024-12-02') },
    { title: 'Bonus for Project C', reason: 'Teamwork', amount: 2000, status: 'Rejected', date: new Date('2024-12-05') },
    { title: 'Bonus for Project D', reason: 'Efficiency', amount: 4500, status: 'Approved', date: new Date('2024-12-10') }
  ];

  constructor() {}

  ngOnInit(): void {}
}
