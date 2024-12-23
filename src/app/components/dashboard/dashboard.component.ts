import { Component, OnInit } from '@angular/core';
import { MOCK_BONUS_REQUESTS } from '../../mock-data'; // استيراد البيانات الوهمية
import { CurrencyPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports :[CurrencyPipe , CommonModule]
})
export class DashboardComponent implements OnInit {
  bonusRequests = MOCK_BONUS_REQUESTS;  // استخدام البيانات الوهمية
  totalBonuses: number = 0;

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // حساب إجمالي المكافآت
    this.totalBonuses = this.bonusRequests.reduce((sum, request) => sum + request.amount, 0);
  }
}
