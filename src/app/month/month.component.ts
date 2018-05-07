import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Month }         from '../month';
import { DataService }  from '../data.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
 @Input() month: Month;

  constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.getMonths();
  }

  getMonths(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.dataService.getMonths(id)
    //    .subscribe(month => this.month = month);
  }

  goBack(): void {
    this.location.back();
  }
}