import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

  viewArticle(id) {
    
  }
}
