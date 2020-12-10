import { Component, OnInit } from '@angular/core';

import {SharedDataService} from '../shared-data.Service';
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private sharedDataSvc: SharedDataService) { }

  ngOnInit(): void {
    console.log(this.sharedDataSvc.sharedString);
  }

}
