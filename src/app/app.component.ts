import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstClassComponent } from "./first-class/first-class.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-Angular';
}
