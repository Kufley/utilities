import { Component, OnInit } from '@angular/core';

import {Month} from "../month";
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    months : Month[];

    today = Date.now();

    getMonths(): void {
        this.dataService.getMonths()
            .subscribe(months => this.months = months);
    }
    constructor(public dataService: DataService) { }

  ngOnInit() {
      this.getMonths();
  }

}
