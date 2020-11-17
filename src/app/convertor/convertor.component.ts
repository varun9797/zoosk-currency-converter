import { Component, OnInit } from '@angular/core';
import { ConverterService } from './../shared/converter.service';
import { CommonService } from './../shared/common.service'

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  fromAmount: Number = 0;
  convertedAmount: Number = 0;
  fromSelectedCurrency: String = "USD";
  toSelectedCurrency: String = "USD";
  currentDate = new Date();

  constructor(private _converterService: ConverterService, private _commonService: CommonService) { }

  ngOnInit() {
  }
  convertCurrency() {
    this._converterService.getExchangeRate(this.fromSelectedCurrency).subscribe((data: any) => {
      console.log(data.rates);
      let temp = Number(data.rates[`${this.toSelectedCurrency}`]);
      this.convertedAmount = Number(data.rates[`${this.toSelectedCurrency}`]) * Number(this.fromAmount)
    },
      (error) => {
      }, () => {
        this._commonService.addHistory({
          fromAmount: `${this.fromAmount} ${this.fromSelectedCurrency}`,
          toAmmount: `${this.convertedAmount}  ${this.toSelectedCurrency}`,
          date: this.currentDate
        })
      })
  }

}
