import { Component, OnInit } from '@angular/core';
import {MONTHS} from '../mock-date';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    months = MONTHS;
    today = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
