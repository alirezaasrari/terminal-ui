import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    if (key) {
      this.http.get<any>(`http://api.sahmab.co/accounts/loggedin-user?api_key=${key}`).subscribe({
        next: (res: any) => {
          console.log(res);
          
          if (res.error === 0) {
            localStorage.setItem('token', 'true');
            window.location.href = 'http://terminal.sahmab.co/';
          } else {
            window.location.href = 'http://accounts.sahmab.co/login';
          }
        },
        error: (e) => {
          window.location.href = 'http://accounts.sahmab.co/login';
        }
      });
    }
  }
}
