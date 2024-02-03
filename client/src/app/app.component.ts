import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'dotnet App';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // basically useEffect with empty dependency array
    // Observable is like a stream of data
    this.http.get("https://localhost:5124/api/users").subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed!'),
    });
  }
}
