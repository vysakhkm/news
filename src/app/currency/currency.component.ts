import { Component,OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  constructor(private service:NewsService){

  }
  currency:any
  currencycodes:string[]=[]
  fromcode:string=""
  tocode:string=""
  amount:number=0
  result:number=0
  ngOnInit(): void {
     this.service.exchangerate().then(res=>res.json()).then(data=>{
      this.currency=data.conversion_rates
      for(let code in this.currency){
        this.currencycodes.push(code)
      }
      
     })
  }
  convert(){
    console.log(this.amount);
    console.log(this.fromcode);
    console.log(this.tocode);
    
    
    let tocoderate=this.currency[this.tocode]
    let fromcoderate=this.currency[this.fromcode]
    this.result=(this.amount/fromcoderate)*tocoderate
    console.log(this.result);
    

  }
}