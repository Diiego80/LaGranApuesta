import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from "./countdown/countdown.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LaGranApuesta';
}
