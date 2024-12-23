import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../mock-data-login'; // استيراد البيانات الوهمية
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = MOCK_USERS;

  constructor() { }

  login(username: string, password: string) {
    // البحث عن المستخدم في البيانات الوهمية
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      // إذا كان المستخدم موجودًا، قم بإرجاع بياناته
      return { success: true, user };
    } else {
      // إذا لم يكن هناك تطابق، إرجاع خطأ
      return { success: false, message: 'Invalid username or password' };
    }
  }
}
