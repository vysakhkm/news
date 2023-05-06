import { Component,OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  news:any
 constructor(private service:NewsService){

 }
 ngOnInit(): void {
  this.news=this.service.getallnews().articles
 }
}
