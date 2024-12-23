import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',  // تغيير الاسم هنا
  templateUrl: './register.component.html',  // تغيير الاسم هنا
  styleUrls: ['./register.component.css'] , // تغيير الاسم
  imports : [CommonModule , FormsModule]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  onSubmit() {
    // التحقق من تطابق كلمات المرور
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // هنا يمكنك إضافة منطق للتسجيل، مثل إرسال البيانات إلى API
    // إذا كانت البيانات صحيحة، يمكنك إعادة تعيين الحقول
    console.log('Registration successful with:', {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    // إعادة تعيين الحقول بعد التسجيل الناجح
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
  }
}
