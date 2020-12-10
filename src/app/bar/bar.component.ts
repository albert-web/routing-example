import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.Service';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(private sharedDataSvc: SharedDataService) { }

  ngOnInit(): void {
    console.log(this.sharedDataSvc.sharedString);
  }

}
