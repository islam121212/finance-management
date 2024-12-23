import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MOCK_BONUS_REQUESTS } from '../../mock-data';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [FormsModule , CommonModule , HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage:  string | undefined = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onLogin(): void {
    const result = this.authService.login(this.username, this.password);

    if (result.success) {
      // عند النجاح، سيتم توجيه المستخدم إلى الـ Dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // عند الفشل، سيتم عرض رسالة خطأ
      this.errorMessage = result.message;
    }
  }
}
