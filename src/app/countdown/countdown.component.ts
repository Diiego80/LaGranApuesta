import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  timeRemaining: any ={
    days    : 0,
    hours   : 0,
    minutes : 0,
    seconds : 0
  };

  targetDate: Date = new Date ('December 31, 2024 00:00:00')

  ngOnInit(): void {
      this.calculateTimeRemaining();
      setInterval(() => this.calculateTimeRemaining(),1000)
  }

  calculateTimeRemaining(): void{
    const now = new Date().getTime();
    const distance = this.targetDate.getTime()- now;

    this.timeRemaining = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }
}
