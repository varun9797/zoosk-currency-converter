import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyArray=[];
  constructor(private _commonService:CommonService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory(){
    this._commonService.tempArray.subscribe((data)=>{
      this.historyArray = data;
    }) 
  }


}
