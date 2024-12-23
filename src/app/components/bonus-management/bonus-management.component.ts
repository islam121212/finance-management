import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bonus-management',
  templateUrl: './bonus-management.component.html',
  styleUrls: ['./bonus-management.component.css'],
  imports:[CommonModule]
})
export class BonusManagementComponent implements OnInit {
  bonusRequests = [
    { title: 'Year End Bonus', reason: 'Performance', amount: 5000, status: 'Pending' },
    { title: 'Project Bonus', reason: 'Completed Project', amount: 2500, status: 'Approved' },
    { title: 'Holiday Bonus', reason: 'Holiday', amount: 1500, status: 'Rejected' },
    { title: 'Attendance Bonus', reason: 'Perfect Attendance', amount: 1000, status: 'Pending' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Approve request
  approveRequest(request: any) {
    request.status = 'Approved';
  }

  // Reject request
  rejectRequest(request: any) {
    request.status = 'Rejected';
  }
}
